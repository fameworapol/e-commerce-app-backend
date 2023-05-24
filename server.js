const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

//Middleware 
const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

const productRoute = require('./route/product')
const profileRoute = require('./route/profile')
app.use("/product",productRoute)
app.use("/profile",profileRoute)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{console.log("เชื่อมต่อเรียบร้อย")})
.catch((error)=>{console.log(error)})