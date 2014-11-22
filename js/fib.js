function fib(n){
	console.log(n);
	if (n >= 0){
		return fib(n-1) + fib (n-2);
	}
	else{
		return 0;
	}
}
console.log(fib(2));
