public class Car {
    private Integer id;
    private String license;
    private Account driver;
    protected Integer passengers;

    public Car(String license, Account driver) {
        this.license = license;
        this.driver = driver;
    }

    void printDataCar() {

        if(passengers != null) {
            System.out.println(
            "id: " + id + " " + 
            "Licence: " + license + " " + 
            "Driver: " + driver.name + " " + 
            "Passengers: " + passengers
            );
        } else {
            System.out.println("passengers are null!");
        }

        
    }

    public Integer getPassengers() {
        return passengers;
    }

    public void setPassengers(Integer passengers) {

        if(passengers == 4) {
            this.passengers = passengers;
        } else {
            System.out.println("Cars passengers must be set to 4");
        }
        
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getDriver() {
        return driver;
    }

    public void setDriver(Account driver) {
        this.driver = driver;
    }

    
    
}
