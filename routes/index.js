var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user_info_form', function(req, res, next) {
	  res.render('user/user_info_form', { id : 'skyfly33', name : '이동훈', age : '30' });
});

/* POST pages */
router.post('/user_info', function(req, res, next) {
	  res.render('user/user_info', { id : req.body.id, name : req.body.name, age : req.body.age });
});

router.get('/drink', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('printDrinks', {  //printDrinks.ejs 호출, 배열을 다시 한번 오브젝트에 저장하여 전달하는 것에 주의, JADE 도 동일
        drinks: drinks,
        tagline: tagline
    });
});

module.exports = router;
