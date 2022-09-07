<?php

// $arr = ['Hello', True, 3];

// // добавить элементы в массив
// $arr[] = 'lol';

// foreach ($arr as $a) {
//     echo $a;
// }

// // посчитать элементы
// $c = count($arr);
// echo $c;

// $arr_2 = [10, 2, 4, 5, 15, 20, 6];

// foreach ($arr_2 as $a_2) {
//     if ($a_2 % 5 == 0) {
//         echo $a_2;
//     }
// }

// for ($i = 0; $i <= count($arr_2); $i++) {
//     if ($arr_2[$i] % 5 == 0) {
//         echo $arr_2[$i];
//     }
// }

$arr = array(2, True, 'hello', 45.4);
var_dump($arr);
print_r($arr);
echo $arr[rand(0, count($arr)- 1)];

$length = rand(5, 10);
$array = array();

for ($i = 0; $i < $length; $i++) {
    $array[$i] = rand(0, 100);
}

print_r($array);

// чтобы открыть файл и сделать из значений массив
// $arr_2 = file('hello.txt');


// в php нету словарей, а есть ассоциативные массивыб пара ключ значение
$arr_3 = ['one'=> 3, 'two'=> '3'];
print_r($arr_3);

// интерполяция в php, если массив многомерный, то ссылка помещается в {}
$sar[] = 'Hello';
echo "Danil $sar[0] ";

// конструкция list
$dop = [1, 2, 3];
list($one, $two, $three) = $dop;
echo $one;

// КАК ПРОЙТИСЬ ПО МАССИВУ? 
$ar_4 = ['1', '2'];
for ($i = 0; $i < count($ar_4); $i ++) {
    echo "$ar_4[$i]";
}

foreach($ar_4 as $a4 => $value) {
    echo "$a4: $value";
}

// МАССИВЫ МОЖНО КОНКАТЕНРОВАТЬ СО ЗНАКОМ +, ЕСЛИ КЛЮЧИ ИДУТ ПО ПОРЯДКУ
// ЕСЛИ МАССИВЫ НЕ АССОЦИАТИВНЫЕ ТО ОБЪЕДИНЯЮТСЯ С ФУНКЦИЕЙ array_merge()
$h_1 = [1 => 'lol', 2 => 'lol_ 2'];
$h_2 = [3 => 'ty', 4 => 'tr'];
$h_3 = $h_1 + $h_2;
print_r($h_3);

// ФУНКЦИЯ in_array ПРОВЕРЯЕТ НА НАЛИЧИЕ ЭЛЕМЕНТА В МАССИВЕ
// ПАРАМЕТР TRUE ПРОВЕРЯЕТ НА СООТВЕТСТВИЕ ТИПОВ
$j1 = [4 => 'k', 'l', 's', 1];
if (in_array('1', $j1, true)) {
    echo "True";
}
else {
    echo "False";
}


?>
