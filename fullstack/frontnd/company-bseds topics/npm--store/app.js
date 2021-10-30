var nodemailer=require('nodemailer')

var transprter=nodemailer.createTransport({
    service:'gmail',
    auth:{
       user:'waseemahmed116@gmail.com',
       pass:'66556'
    }
})

var mailoptions={
    from:'waseemahmed116@mail.com',
    to:'harishreddy8499@gmail.com',
    subject:'advance js topic ',
    text:'satish how r u ,r u understanding this topic'

}

transprter.sendMail(mailoptions,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})