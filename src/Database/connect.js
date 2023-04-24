const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection Successful");
    
} catch (error) {
    console.log(error)
}
