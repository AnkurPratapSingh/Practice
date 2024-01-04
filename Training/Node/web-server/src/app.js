const path = require('path')
const express = require('express');
const { log } = require('console');
const hbs = require('hbs')
const forcast = require('./Utils/Forcast')

const app = express();
const  address = path.join(__dirname,'../public')
app.set('view engine','hbs')

const viewsPath = path.join(__dirname,'../template/views'); // this is used to set if the folder for the template engine is not views
const partialPath = path.join(__dirname,'../template/partial'); 
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

app.use(express.static(address));
app.get('/',(req,res)=>{
    res.render('index',{
        title:"Weather App"
    })

})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:"help"
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"about"
    })

})


app.get('/getWeather',async(req,res)=>{ 
    if(!req.query.address)
    {
        return res.send({
            error:'Please provide Address'
        })
    }

    try{
        console.log("fetching ");
      
        const data = await forcast();
        const str =  data.current.weather_descriptions[0]+' It is currently '+ data.current.temperature+' and feels like '+data.current.feelslike;
                       console.log(str);
         //console.log(data);  
         return res.send({
            data:str
         })    
       
        }
    catch(err){
        return res.send({
            error:err
        })
    }
    

})

app.get('/help/*',(req,res)=>{
    res.render('notFoundHelp')

})
app.get('/*',(req,res)=>{
    res.render('notFound')

})

app.listen(3005,()=>{
    console.log('Server is Ready')
})