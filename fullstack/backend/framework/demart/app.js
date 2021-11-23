require('dotenv').config()
var express=require('express')
var app=express()

app.set('port',process.env.PORT||8009)
var ejs=require('ejs')
var path=require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/src/views'))

app.route('/home')
.get((req,res)=>{
    res.render('home')
})
.put((req,res)=>{
    res.send('hello')
})
.delete((req,res)=>{
    res.send('hello')
})
.post((req,res)=>{
    res.send('hello')
})



app.listen(app.get('port'),()=>{
    console.log(`it is working port mno  ${app.get('port')}`)
})