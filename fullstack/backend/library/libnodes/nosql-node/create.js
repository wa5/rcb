var mongo=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017/'
mongo.connect(url,(err,db)=>{
if(err)throw err
console.log('db connetd')

var dbo=db.db("drisha")
dbo.createCollection("students",(err,res)=>{
    if(err)throw err
    console.log('created collection')
    db.close()
})
})