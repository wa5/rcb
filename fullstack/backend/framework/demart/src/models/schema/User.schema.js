require('../../../config/db.config')
var mongoose=require('mongoose')

const {Schema}=mongoose

var UserStructure=new Schema({
    name:String,
    email:String,
    password:String

})
module.exports=mongoose.model('users1',UserStructure)