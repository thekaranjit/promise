const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuf Worked ');

	} else {
		reject('Error, it broke')
	}

})


promise.then(result => console.log(result))

promise
.then(result => result + '!')
.then(result2 => {
	throw Error
	console.log(result2);

})
.catch(() => console.log('errrror!'))

