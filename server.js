const express = require('express');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes.js')
const apiRoutes = require('./routes/apiRoutes/apiRoutes.js')

const app = express();

const PORT = process.env.PORT || 3000;

//app.use('/api', apiRoutes)

app.use('/', htmlRoutes)

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
    console.log('You got this hunter! you have all the resources to ace this challenge!!');
});