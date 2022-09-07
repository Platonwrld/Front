<?php

use phpDocumentor\Reflection\DocBlock\Tags\Since;

class Singleton {
    
}

$a = new Singleton();
$b = new Singleton();

echo $a === $b ? True : False;

?>