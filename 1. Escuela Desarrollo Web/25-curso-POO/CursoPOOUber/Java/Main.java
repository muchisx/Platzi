class Main {

    public static void main(String[] args) {
        System.out.println("Hey");
        Car car = new Car("AAA123", new Account("Muchis", "CC1"));
        car.id = 1;
        car.passengers = 4;
        car.printDataCar();

        Car car2 = new Car("BBB123", new Account("Muchisx", "CC2"));
        car2.id = 2;
        car2.passengers = 4;
        car2.printDataCar();
    }
}

// Name of the class will be set to the same of the file
