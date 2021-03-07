const router = require('express').Router();

router.get('/dotenvtest', (req,res) => {
    
    console.log('dotenvtest');
   // test 출력
    res.send(process.env.TEST);
});

module.exports = router;