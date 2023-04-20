const dotenv = require('dotenv');
const connectToDatabase = require('./src/Database/connect');

dotenv.config();

connectToDatabase();

require('./src/Modules/express');