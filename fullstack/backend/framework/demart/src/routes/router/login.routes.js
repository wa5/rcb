var express=require('express')
var Router=express.Router()

Router.route('/login')
.get((req,res)=>{

var data=req.query
var name=req.query.name
var email=req.query.email
var password=req.query.password
console.log(data)

    res.render('login',{name:name,email:email,password:password})
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


module.exports=Router