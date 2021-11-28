var express=require('express')
var Router=express.Router()
var {getRegister,postregister,putRegister,deletRegister}=require('../../controller/register.Ctrl')

Router.route('/register')
.get()
.put()
.delete()
.post()



module.exports=Router