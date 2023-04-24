const dotenv = require('dotenv');

dotenv.config();

require('./database/connect');

require('./module/express');