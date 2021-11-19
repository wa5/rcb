var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

con.connect((err)=>{

    if(err)throw err
    console.log('i have been connected to db')
    con.query("CREATE DATABASE uvalika",(err,db)=>{
        if(err)throw err
        console.log('db ready')
    })
})