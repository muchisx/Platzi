<?php
require_once('car.php');
class UberX extends Car {
    public $brand;
    public $model;

    public function __construct($license, $driver, $brand, $model) {
        parent::__construct($license,$driver);
        $this->brand = $license;
        $this->model = $driver;
    }

    public function PrintDataCar(){
        echo "license: $this->license, conductor: {$this->driver->name}, document: {$this->driver->document}";
    }
}


?>