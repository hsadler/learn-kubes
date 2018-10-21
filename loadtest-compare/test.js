
// LOADTEST KUBES CLUSTER VS. BARE DOCKER INSTANCE

const axios = require('axios');

const reqUrl = 'http://192.168.99.100:32294/';
const reqAmount = 10;

// ex:
// axios.all([
// 		axios.get(reqUrl),
// 		axios.get(reqUrl),
// 	]).then(axios.spread((
// 		response1,
// 		response2
// 	) => {
// 		console.log('res 1: ', response1.data);
// 		console.log('res 2: ', response2.data);
// 	})).catch(error => {
// 		console.log(error);
// 	});

var axRequests = [];
for (var i = 0; i < 10; i++) {
	axRequests.push(axios.get(reqUrl));
}
axios.all(axRequests)
	.then(results => {
		results.forEach(r => {
			console.log(r.data);
		});
	});












