<?php

$array = [1, 9, 3, 2, 7, 5, 8];


function quickSort($arr)
{
    $count = count($arr);

    if($count <= 1) return $arr;

    $barrier = $arr[0];

    $leftArr = $rightArr = array();

    for ($i = 1; $i < $count; $i++)
    {
        if($barrier > $arr[$i])
        {
            $leftArr[] = $arr[$i];
        }
        else
        {
            $rightArr[] = $arr[$i];
        }
    }

    $leftArr = quickSort($leftArr);
    $rightArr = quickSort($rightArr);

    return array_merge($leftArr, array($barrier), $rightArr);
}


var_dump(quickSort($array));
?>