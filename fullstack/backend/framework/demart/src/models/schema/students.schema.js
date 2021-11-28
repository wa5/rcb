require('../../../config/db.config')
var mongoose=require('mongoose')

const {Schema}=mongoose

var studentStructure=new Schema({
    name:String,
    age:Number,
    classes:String

})
module.exports=mongoose.model('students2',studentStructure)