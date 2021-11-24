var express=require('express')
var Router=express.Router()



Router.route('/home')
.get((req,res)=>{
    var name=req.query.name
    res.render('home',{name:name})
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