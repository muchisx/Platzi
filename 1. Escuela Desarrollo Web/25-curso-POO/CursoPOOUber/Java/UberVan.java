import java.util.ArrayList;
import java.util.Map;

class UberVan extends Car {
    Map<String, Map<String,Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;
    // protected Integer passengers;
    
    public UberVan(String license, Account driver){
        super(license, driver);
    }

    public UberVan(String license, Account driver, 
    Map<String, Map<String,Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterial){
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }

    @Override
    public void setPassengers(Integer passengers) {
        if(passengers == 6){
            this.passengers = passengers;
        }else{
            System.out.println("Necesitas asignar 6 pasajeros");
        }
    }

    
}