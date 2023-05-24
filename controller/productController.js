const Product = require("../model/productModel")
const uuidv4 = require("uuid")

exports.create = (req, res) => {
    const {id,description,img,price,rate} = req.body
    Product.create({id:id,description:description,img:img,price:price,rate:rate}).then(doc=>{
        res.json(doc)
    }).catch(err=>{
        console.log(err);
    })
}
exports.getData = (req, res) => {
    Product.find({}).exec().then(product=>{
        res.json(product)
    }).catch(err=>{
        res.status(400).json({error:"ขณะนี้ยังไม่มีบทความ"})
    })
}

exports.getProduct = (req, res) => {
    const {id} = req.params
    Product.findOne({id}).then(product=>{
        res.json(product)
    }).catch(err=>{
        console.log(err);
    })
}