
from car import Car
from account import Account

if __name__ == "__main__":
    print("Hola Mundo")
    
    car = Car("AMS234", Account("Andres Herrera", "ANDA876"))
    print(vars(car))
    print(vars(car.driver))

    # car2 = Car()
    # car2.id = 2
    # car2.license = "BBB123"
    # car2.driver = "Muchisx"
    # car2.passengers = 4
    # print(vars(car2))