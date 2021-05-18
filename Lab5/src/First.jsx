import React from 'react';

function First() {
	function canIGoOutNow() {
		var p1 = getWeatherFromMeteo();
		var p2 = getWeatherFromOnet();
		var p3 = getWeatherFromGoogle();
		Promise.race([p1, p2, p3]).then(result => { console.log("can I go out now?", result) }).catch(result => { console.log("catch", result) });
	}

	function getCurrentTime(result, seconds, source, shouldFail) {
		return new Promise((resolve, reject) => {
			console.log(source + " before getCurrentTime");
			setTimeout(() => {
				if (shouldFail) {
					console.log(source + " after getCurrentTime FAIL");
					reject({ result, source });
				}
				else {
					console.log(source + " after getCurrentTime");
					resolve({ result, source });
				}
			}, 1000 * seconds)
		});
	}

	function getMyLocation(result, seconds, source, shouldFail) {
		return new Promise((resolve, reject) => {
			console.log(source + " before getMyLocation");
			setTimeout(() => {
				if (shouldFail) {
					console.log(source + " after getMyLocation FAIL");
					reject({ result, source });
				}
				else {
					console.log(source + " after getMyLocation");
					resolve({ result, source });
				}
			}, 1000 * seconds)
		});
	}

	function getWeatherFromMeteo() {
		return Promise.all([getCurrentTime(true, 3, "Meteo"), getMyLocation(true, 4, "Meteo")]);
	}

	function getWeatherFromOnet() {
		return Promise.all([getCurrentTime(true, 2, "Onet"), getMyLocation(true, 5, "Onet")]);
	}

	function getWeatherFromGoogle() {
		return Promise.all([getCurrentTime(true, 1, "Google", true), getMyLocation(true, 6, "Google", true)]);
	}

	return (
		<div>
			<button onClick={canIGoOutNow}>Click me!</button>
		</div>
	);
}

export default First;