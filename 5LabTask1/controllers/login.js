var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
});
router.post('/',(req,res)=>{
    if(req.body.username == req.body.password)
    {
		res.redirect('/admin');
    }
    else
    {
		res.send('invalid username/password');
	}
});

module.exports = router;