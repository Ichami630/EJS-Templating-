import express from "express";

const port=3000;
const app=express();
const date=new Date();

let type="weekday";
let adv="you got to work hard to survive!";
if(date.getDay()===0 || date.getDay()===6){
    type="weekend";
    adv="you got to get some rest!";
}

app.get('/',(req,res)=>{
    res.render("index.ejs",
    {
        day:type,
        advice:adv,
    })
})
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});
