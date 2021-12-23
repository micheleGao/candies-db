const mongoose = require('mongoose');

const candySchema = new mongoose.Schema(
    {
        candy:String,
        img:String, 
        flavor:String, 
    },
    {timestamps :true}
);

const Candy = mongoose.model('Candies', candySchema);

module.exports = Candy;