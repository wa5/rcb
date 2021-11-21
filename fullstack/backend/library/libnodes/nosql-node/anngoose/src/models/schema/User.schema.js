require('../../../config/db.config')
var mongoose=require('mongoose')

const {Schema}=mongoose

var UserStructure=new Schema({
    name:String,
    age:Number,
    email:String

})
module.exports=mongoose.model('users',UserStructure)