<?php

require_once('car.php');
require_once('uberX.php');
require_once('uberPool.php');
require_once('account.php');

$car = new Car("AAA123", new Account("Muchis", "CC1"));
$car->printDataCar();

$uberX = new UberX("AAA123", new Account("Muchis", "CC1"),"BMW", "idk");
$uberX->printDataCar();

$uberPool = new UberPool("AAA124", new Account("Muchis", "CC1"),"BMW", "idk");
$uberPool->printDataCar();
?>

