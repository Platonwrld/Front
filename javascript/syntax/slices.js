var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// 0 - start, 2 - stop, step may be
var newArr = arr.slice(0, 6)	// [ 1, 2, 3, 4, 5, 6 ]
var newArr2 = arr.slice(5)		// [ 6, 7, 8 ]

console.log(newArr)
console.log(newArr2)