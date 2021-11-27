
  var nodemailer=require('nodemailer')
function sendmail(name,emailid){
  


var transporter=nodemailer.createTransport({
  service:'gmail' ,
  auth:{
      user:'waseemahmed116@gmail.com',
      pass:'1ac13cs034'
  }
})

var maioption={
    from:'waseemahmed116@gmail.com',
    to:emailid,
    subject:'test mail from ism univ',
    text:`test email from ism to ${name}`
}

transporter.sendMail(maioption,(err,info)=>{
if(err){
    console.log(err)
}else{
    console.log("mail send")
}
})
}

module.exports=sendmail