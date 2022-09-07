<?php

function barHello ($x) {
    echo 'Hello, ' . $x;
}

barHello('Danil');

// ФУНКЦИИ С ПАРАМЕТРАМИ
// ПОСЛЕ ДВОЕТОЧИЯ УКАЗЫВАЕТСЯ ТИП, ВОЗВРАЩАЕМЫЙ 
// ...$items - ЗАРАНЕЕ НЕИЗВЕСТНОЕ КОЛИЧЕСТСВО АРГУМЕНТОВ
function booLol (int $x, int $y) : int {
    return "$y : $x";
}


?>
