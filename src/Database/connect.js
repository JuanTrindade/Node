const { MongoClient } = require('mongodb')

const connectToDatabase = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        await MongoClient.connect(uri);
        console.log("Connection successful");

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDatabase;