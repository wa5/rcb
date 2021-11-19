var mysql=require('mysql')

var con=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'ism'
})
con.connect((err)=>{
if(err)throw err
console.log('db connected')

var sql="CREATE TABLE students(name VARCHAR(255),class VARCHAR(255))"

con.query(sql,(err,res)=>{
    if(err)throw err
    console.log('table also  created')
})

})
