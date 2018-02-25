console.log("HELLLLLLLLLLLLLLLo");

async function loop1() {
	for(var i = 0; i < 1000000; i++) {
		console.log("*********************");
	}	
}
async function loop2() {
	for(var i = 0; i < 100000; i++) {
		console.log("#");
	}
}

loop1();
loop2();