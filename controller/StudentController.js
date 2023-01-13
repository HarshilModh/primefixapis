const mongooose=require("mongoose");
const Student=require("../models/StudentModel");
const bcrypt=require("bcrypt");
const hashPassword =async(password)=>{
    console.log(password);
    const salt=await bcrypt.genSalt(10);
    const hash=bcrypt.hashSync(password,salt).toString();
    console.log(hash);
    return hash;

}
exports.addStudent=function(req,res){
    let password=bcrypt.hashSync(req.body.password,10);
    let student=new Student({
        email:req.body.email,
        password:password
    });
    Student.create(student,function(err,student){
        if(err){
            res.send(err);
        }
        res.json(student);
    });
}
exports.loginStudent=function(req,res){ 
    Student.findOne({email:req.body.email},function(err,student){
        if(err){
            res.send(err);
        }
        if(student){
            if(bcrypt.compareSync(req.body.password,student.password)){
                res.json({
                    message:"login success",
                    id:student._id,
                    email:student.email,
                    password:student.password

                });
            }
            else{
                res.json("password is incorrect");
            }
        }   
        else{
            res.json("user not found");
        }
    });
}