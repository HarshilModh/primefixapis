const mongooose=require("mongoose");
const Schema=mongooose.Schema;
const songSchema=new Schema({
    title:{type:String,required:true,unique:true},
}
);
module.exports=mongooose.model("Song",songSchema);