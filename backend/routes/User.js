const express = require('express');
const router= express.Router();

router.post('/signup',(req, res) => {
    res.send('signup');
})

router.post('/signin',(req, res) => {
    res.send('login');
})

module.exports = router;