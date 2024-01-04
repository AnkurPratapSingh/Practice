
// request({url:url},(err,res)=>{
//      const data = JSON.parse(res.body);   needed to be parsed
//      console.log(data.current);
// })


// request({url:url,json:true},(err,res)=>{
//     ///const data = JSON.parse(res.body);      
//                 //not needed as already parsed
//       const str =  res.body.current.weather_descriptions[0]+' It is currently '+ res.body.current.temperature+' and feels like '+res.body.current.feelslike;
//                 console.log(str);
// })

module.exports  = async function (){
    const url = 'http://api.weatherstack.com/current?access_key=c61da812c6250aa97debfd287b9e428d&query=India'
     console.log(url);
    const data = await fetch(url);
  //  console.log(data);
    const realData = await data.json();
 
   return realData
}
// fetchData()