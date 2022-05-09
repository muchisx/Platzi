class Main {

    public static void main(String[] args) {
    
        UberX uberX = new UberX(
            "AAA123", 
            new Account("Muchis", "CC1"), 
            "BMW", 
            "idk"
        );

        uberX.setPassengers(4);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("FGH345", new Account("Andres Herrera", "AND123"));
        uberVan.setPassengers(6);
        uberVan.printDataCar();
    }
}

// Name of the class will be set to the same of the file
