require('dotenv').config()
var express=require('express')
var app=express()

app.set('port',process.env.PORT||8009)
var ejs=require('ejs')
var path=require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/src/views'))

var {home,login,register}=require('./src/routes/index')
app.use('/api',home)
app.use('/api',login)
app.use('/api',register)






app.listen(app.get('port'),()=>{
    console.log(`it is working port mno  ${app.get('port')}`)
})