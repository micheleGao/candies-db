require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT ||4000

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//connection to mongo
mongoose.connect(
    mongoURI,
    () =>{
        console.log('successful - MONGODB established.')
    }
);


//required
//seed

// Candies.insertMany(candySeed, (error, candy)=>{
//     if (error){
//         console.log (error);
//     }else{
//         console.log(candy);
//     }
//     db.close();
// })

// console.log(candySeed)


//connection Error/success
//define callback function for various events
db.on('error', (err) => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('MongoDB connected on: ', mongoURI));
db.on('disconnected', () => console.log('MongoDB disconnected'));
 
//open the connection
db.on('open',() => {
    console.log(`✅ mongo connection is made babygirl!`);
});

module.exports = mongoose;