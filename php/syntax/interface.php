<?php

interface Hello {
    public function helloFunc();
}


class Test implements Hello {
    
    public $name = 'Danil';

    public function helloFunc()
    {
        echo $this -> $name;
    }
} 
?>