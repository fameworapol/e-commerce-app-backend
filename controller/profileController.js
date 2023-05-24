const Profile = require("../model/profileModel")

exports.getProfile = (req, res) => {
    const {email} = req.params
    Profile.findOne({email}).exec().then(response=>{
        res.json(response)
    }).catch(err=>{
        console.log(err);
    })
}

exports.createProfile = (req,res) =>{
    const {name,email,gender,date,password} = req.body
    Profile.create({name:name,email:email,gender:gender,birthday:date,password:password}).then(response=>{
        res.json(response)
    }).catch(err=>{
        console.log(err);
    })
}

exports.login = (req, res) => {
    const {email,password} = req.body
    Profile.findOne({email:email}).exec().then(response=>{
        if(response.password==password){
            res.json({data:"เข้าสู่ระบบเรียบร้อยแล้ว",email:response.email,name:response.name})
        }else{
            res.status(400).json("รหัสผ่านหรืออีเมลไม่ถูกต้อง")
        }
    }).catch(err=>{
        res.status(400).json({error:err})
    })
}

exports.updateProfile = (req, res) => {
    const {name,email,password,gender} = req.body
    Profile.findOneAndUpdate({email},{name:name,email:email,password:password,gender:gender}).then(response=>{
        res.json(response)
    }).catch(err=>{
        console.log(err);
    })
}

exports.deleteProfile = (req, res) => {
    const {email} = req.params
    Profile.findOneAndDelete({email}).exec().then(response=>{
        res.json({data:"ลบบัญชีเรียบร้อยแล้ว"})
    }).catch(err=>{
        console.log(err);
    })
}