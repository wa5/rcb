var mysql=require('mysql')

var con=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:''
})
con.connect((err)=>{
if(err)throw err
console.log('db connected')

con.query("CREATE DATABASE ism",(err,res)=>{
if(err)throw err;
console.log('db created')
var sql="CREATE TABLE students(name VARCHAR(255),class VARCHAR(255))"

con.query(sql,(err,res)=>{
    if(err)throw err
    console.log('table also  created')
})
})
})