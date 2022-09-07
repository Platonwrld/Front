<?php

do {
    $a = rand(0, 10);
    $b = rand(0, 10);
    $c = rand(0, 10);

    $res = $a + $b + $c;
    echo $res;

}

while ($a + $b + $c < 14);

?>