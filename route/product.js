const express = require('express')
const {create,getData,getProduct} = require('../controller/productController')
const router = express.Router()

router.post("/addProduct",create)
router.get("/getAllProduct",getData)
router.get('/getProduct/:id',getProduct)
module.exports = router