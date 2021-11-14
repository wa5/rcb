var http=require('http')


var server=http.createServer((req,res)=>{

    res.write("hello im the first api of get")
    res.end()
})

server.listen(8001,()=>{
    console.log('hello im working on port no 8001')
})
