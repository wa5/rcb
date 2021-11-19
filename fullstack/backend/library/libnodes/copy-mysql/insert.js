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

var sql="INSERT INTO `students`(`name`, `class`) VALUES ('drisha','mern')"

con.query(sql,(err,res)=>{
    if(err)throw err
    console.log('table also  inserted')
})

})