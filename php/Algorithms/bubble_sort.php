<?php

function bubble_sort(&$array)
{
    for ($i=0; $i < count($array); $i++)
    {
        for ($y=($i+1); $y < count($array); $y++)
        {
            if ($array[$i] > $array[$y])
            {
                $c = $array[$i];
                $array[$i] = $array[$y];
                $array[$y] = $c;
            }
        }
    }
}

$arr = array(92, 64, 87, 18, 17, 66, 50, 88, 99, 77);

bubble_sort($arr);

echo '<pre>';
print_r($arr);
echo '</pre>';

?>
