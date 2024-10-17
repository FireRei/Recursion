function fibLoop(number) {
	let fib = [];
	for (let i = 0; i < number; i++) {
		if (i === 0 || i === 1) {
			fib.push(i);
		} else {
			fib.push(fib[i-1] + fib[i-2]);
		}
	}
	return fib;
}

function fibRec(number, arr = []) {
	if (number === 0) {
		return arr;
	}
	if (arr.length <= 1) {
		if (arr.length === 0) {
			arr.push(0);
			return fibRec(number - 1, arr);
		}
		arr.push(1);
		return fibRec(number - 1, arr);
	}
	arr.push(arr[arr.length - 1] + arr[arr.length - 2])
	return fibRec(number - 1, arr);
}