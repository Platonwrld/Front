<?php 

class Hello {

    private $name;
    private $city;
    private $id;

    public function __clone() {
        $this -> $id = 0;
    }

    function construct($name, $age) {
        $this -> $name = $name;
        $this -> $age = $age;
    }


}

$first = new Hello();
$second = clone $first;


?>