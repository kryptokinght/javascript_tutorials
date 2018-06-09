const fs = require('fs');


function readFilePromise(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, "utf-8", (err, data) => {
			if(err) {
				console.log("Error occurred while reading file!");
				console.log(err);
				reject(err);
			}
			resolve(data);
		})
	});
}

//running my readFilePromise Function
readFilePromise("sample.txt").then((data) => {
	console.log(data);
}).catch((err) => {
	console.log("Promise error handler");
	console.log(err);
})
