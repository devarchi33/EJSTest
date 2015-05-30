/**
 * New Node Router File 
 */
var service = require('./services');

module.exports = function(app) {
//	console.log('My Router.js');
	
	app.get('/', service.Index);
	app.post('/user_info', service.user_info);
};
