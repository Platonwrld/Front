<?php

class Pizza {
    public $dough;
    public $cheese;
    public static $chief = 'Danil';
}

# создание экземпляра класса
$ex = new Pizza;

# присваивание значение локальным патрибутам экземпляра класса
$ex -> $dough = 300;
$ex -> $cheese = 100;

echo $ex -> $dough;

echo Pizza::$chief;

# Статические свойства класса это такие свойства к которым можно обратиться в контексте самого класса, не создавая объекты

class Iam {
    public static $name;
}

Iam::$name = 'Danil';
echo Iam::$name;


?>
