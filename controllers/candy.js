require('dotenv').config();
const express = require('express');
const router = express.Router();
const Candies = require('../models/candy');

router.use('/', async (req,res) =>{
    try{
        const allCandies = await Candies.find();
        res.json(allCandies);
    }catch(err){
        console.log(err)
    }
});

router.get('/candies/:id', async (req, res)=>{
    try{
        const currentCandies = await Candies.findById(req.params.id);
        res.json(currentCandies);
    }catch(err){
        console.log(err)
    }
})

module.exports = router;