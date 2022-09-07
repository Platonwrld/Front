<?php

class Base {
    public function sayHello() {
        echo 'Hello';
    }
}

trait sayWorld {
    public function sayHello() {
        parent :: sayHello();
        echo 'world';
    }
}

class MyHelloWorld extends Base {
    use sayWorld;
}

$my = new MyHelloWorld();
$my -> sayHello();

?>