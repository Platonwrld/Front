<?php

function fib($n) {
	$fib_arr = [0, 1];
	$n = $n + 1;
	for ($i = 2; $i < $n; $i++) {
		$fib_arr[$i] = $fib_arr[$i - 1] + $fib_arr[$i - 2];
	}
	return $fib_arr;
}

print_r(fib(9));

?>