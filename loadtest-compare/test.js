
// LOADTEST KUBES CLUSTER VS. BARE DOCKER INSTANCE

const axios = require('axios');

// const reqUrl = 'http://192.168.99.100:32118/'; // Kubes
const reqUrl = 'http://localhost:8080'; // bare Docker instance
const reqAmounts = [
	1,
	10,
	100,
	1000,
	5000
];

var getNow = function() {
	var hrTime = process.hrtime();
	return hrTime[0] * 1000000 + hrTime[1] / 1000;
};

var performRequestsRecursively = function(pos) {
	var reqAmount = reqAmounts[pos];
	var startTime = getNow();
	var axRequests = [];
	for (var i = 0; i < reqAmount; i++) {
		axRequests.push(axios.get(reqUrl));
	}
	axios.all(axRequests)
		.then(results => {
			results.forEach(r => {
				if(r.data !== 'res success...') {
					console.log(r.data);
				}
			});
			var endTime = getNow();
			var latency = (endTime - startTime) / 1000000;
			console.log('latency for request amount: ' + reqAmount + ' = ' + latency);
			if(pos < reqAmounts.length - 1) {
				// give time to recover
				setTimeout(function () {
					performRequestsRecursively(pos + 1);
				}, 1000);
			}
		})
		.catch(errors => {
			console.log('Errors: ', errors.code);
		});
};

performRequestsRecursively(0);

