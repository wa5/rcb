var mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/drisha',(err,con)=>{
    if(err)throw err
    console.log('db connected')
})