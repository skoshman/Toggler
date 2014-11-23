//function fib(n){
//	var arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
//	
//	if (n <= 1){
//		return 0;
//	}
//	else if (n == 2){
//		return 1;
//	}
//	else {
//		return fib(n-1) + fib(n-2);
//	}
//}

function fib(n){
	var sum;
	sum += fib(n-1) + fib(n-2);
	
	return sum;
}

console.log(fib(2));
