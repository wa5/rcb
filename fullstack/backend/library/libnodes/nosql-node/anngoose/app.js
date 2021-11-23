require('./config/db.config')
var {Users,Student}=require('./src/models/index')


//insert operation
// var drisha=new Student({name:'drisha',age:78,classes:'mern class'})
// drisha.save()

//reading
// Student.findOne({name:'drisha'},(err,res)=>{
//     if(err)throw err
//     console.log(res)
// })

//deleting

// Student.findOneAndDelete({name:'drisha'},(err,res)=>{
//     if(err)throw err
//     console.log('deleted')
// })

//update
//reading
Student.findOneAndUpdate({name:'mohan'},{age:24},{overwrite:false,new:true},(err,res)=>{
    if(err)throw err
    console.log(res)
})