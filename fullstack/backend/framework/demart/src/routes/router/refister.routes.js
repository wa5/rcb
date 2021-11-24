var express=require('express')
var Router=express.Router()


Router.route('/register')
.get((req,res)=>{
    res.render('register')
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