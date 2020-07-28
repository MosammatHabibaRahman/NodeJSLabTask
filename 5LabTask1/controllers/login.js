var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
});
/* 
router.post('/',(req,res)=>{
    if(req.body.uname == req.body.password){
        
    }
}); */

module.exports = router;