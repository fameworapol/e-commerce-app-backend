const express = require('express')
const {getProfile,createProfile,login,updateProfile,deleteProfile} = require('../controller/profileController')
const router = express.Router()

router.get("/getProfile/:email",getProfile)
router.post("/createProfile",createProfile)
router.post("/login",login)
router.put('/updateProfile',updateProfile)
router.delete('/deleteProfile/:email',deleteProfile)

module.exports = router