<?php

function longdate($timestasmp) {
    $temp = date('1 F jS Y', $timestasmp);
    return 'Date: $temp';
}

longdate('13:44');

?>