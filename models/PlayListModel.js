const mongooose=require("mongoose");
const Schema=mongooose.Schema;
const PlayListSchema=new Schema({
    title:{type:String,required:true,unique:true},
    Song:[{type:Schema.Types.ObjectId,ref:"Song"}] 
}) 
module.exports=mongooose.model("PlayList",PlayListSchema);