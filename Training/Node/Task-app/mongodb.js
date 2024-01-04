
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

async function connecting(){
    try {
        const client = await MongoClient.connect(connectionURL, { useNewUrlParser: true });
        console.log('Connected to the database');

        const db = client.db(databaseName);

        // await db.collection('users').insertOne({
        //     name: 'Andrew',
        //     age: 27
        // },(err,res)=>{
        //     if(err)
        //     {
        //         console.log("Unable to insert");
        //     }
        //     else{
        //         console.log(res);
        //     }
        // });
          
        // await db.collection(databaseName).insertMany([{
        //     description: 'Cooking',
        //     completed: true
        // },{description:"Dusting",completed:false},{description:"Planting",completed:true}],(err,res)=>{
        //     if(err)
        //     {
        //         console.log("Unable to insert");
        //     }
        //     else{
        //         console.log(res);
        //     }
        // });

        // // console.log('Document inserted');
        // db.collection('tasks').findOne({  description:"Dustng" }, (error, task) => {
        //     console.log(task)
        // })
     const task =   await db.collection('task-manager').findOne({ description:"Dustng"})   // dont user callback and await together
        console.log(task);

           
         // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

        db.collection('tasks').deleteOne({
            description: "Clean the house"
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })



        //update 
         // db.collection('users').updateOne({
    //     _id: new ObjectID("5c0fe6634362c1fb75b9d6b5")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
    } catch (error) {
        console.log('Error:', error);
    }
}

connecting()