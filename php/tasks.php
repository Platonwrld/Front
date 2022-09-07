<?php

$a = 'hello';
$b = 'php';
echo $a . ' ' . $b;

echo substr($a, 1, 1);

$p = 'Sasamba egor kreed';
echo strpos($p, 'eg');
echo substr($p, strpos($p, 'eg'));

function sayHello() {
    return 'Hello';
}

?>