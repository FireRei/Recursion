function mergeSort(arr = []) {
	if (arr.isArray === false) {
		return 'Please provide an array';
	}
	if (arr.length === 1) {
		return arr;
	}
	let left = arr.slice(0, arr.length / 2);
	let  right = arr.slice(arr.length / 2, arr.length + 1);

	left = mergeSort(left);
	right = mergeSort(right);
	const sorted = merge(left, right);

	function merge(left, right, sorted = []) {
		while (left.length != 0 || right.length != 0) {
			if (left[0] < right[0] || left[0] === right[0] || right.length === 0) {
				sorted.push(left[0]);
				left.shift();
			} else if (right[0] < left[0] || left.length === 0) {
				sorted.push(right[0]);
				right.shift();
			}
		}
		return sorted;
	}
	return sorted;
}

console.log(mergeSort([105, 79, 100, 110]));