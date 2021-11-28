


function insertdata(name,email,password){
    var mohan=new Users({name:name,email:email,password:password})
    mohan.save()
}

module.exports=insertdata