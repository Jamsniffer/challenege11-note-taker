const path = require('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    console.log('made it here')
    res.sendFile(path.join(__dirname, '../../Develop/db/db.json'))
})