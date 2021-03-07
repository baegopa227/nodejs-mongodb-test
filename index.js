var express = require('express');
require('dotenv').config();

const app = express();

//Routes
app.use('/test', require('./routes/test'));

app.listen(process.env.PORT, () => console.log('test'));