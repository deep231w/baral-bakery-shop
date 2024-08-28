const express = require('express');
const router= express.Router();
const zod= require('zod');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User= require('../models/User');
dotenv.config();
const signupBody= zod.object({
    email: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
router.post('/signup',async(req, res) => {
    // const {success}= signupBody.safeParse(req.body)
    // if(!success){
    //     return res.status(400).json({
    //         error: 'Invalid input/ email alredy taken'
    //     })
    // }

    const { success, error } = signupBody.safeParse(req.body);
if (!success) {
  return res.status(400).json({
    error: 'Invalid input: ' + error.issues.map(issue => issue.message).join(', ')
  });
}


    const existingUser= await User.findOne({
        email: req.body.email
    })
    if(existingUser){
        return res.status(400).json({
            error: 'Email already exists'
        })
    }
    try{const user= await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userId= user._id;
    const token= jwt.sign({
        userId
    }, process.env.JWT_SECRET)
    res.json({
        message:"user created successfully",
        token: token
    })}
    catch{
        res.status(500).json({
            error: 'Server error'
        })
    }
})

const signinBody= zod.object({
    email: zod.string().email(),
    password: zod.string()
})

router.post('/signin',async(req, res) => {
   const {success}= signinBody.safeParse(req.body)
   if(!success){
       return res.status(400).json({
           error: 'Invalid input'
       })
   }
   const user= await User.findOne({
       email: req.body.email
   })
   if(!user){
       return res.status(401).json({
           error: 'Invalid email or password'
       })
   }
   if (user){
    const token= jwt.sign({
        userId: user._id
    }, process.env.JWT_SECRET)
    res.json({
        message:"user logged in successfully",
        token: token
    })
    return;
   }
})

module.exports = router;