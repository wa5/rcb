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

var sql="SELECT * FROM `students`"

con.query(sql,(err,res)=>{
    if(err)throw err
    console.log(res)
})

})