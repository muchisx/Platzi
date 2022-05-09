# **OOP for Uber**

## **Describring our needs**

We need the following, in order.

1. A need, a person, client, with a phone.
    * The need is moving the client from point A to B

2. We need to assign that A to b point

3. We need to display the service catalogue aswell as drivers.
    * Normal service
    * Uber Pool (mass commuting together)
    * Black (Premium)
    * Van (Bigger car for big group)

4. A pickup system from A and drop off in point B, and the price of the service



## **Our objects**

* Trip
  * User
  * Driver
  * Route
  * Service (Type of Car)
    * Uberx
    * Uberpool
    * Uberblack
    * Ubervan
  * Payment
    * Card
    * Paypal
    * Cash


### **Breakdown of our Objects**

<br>

* **User**
    * id
    * name
    * document
    * email
    * password

* **Driver**
    * id
    * name
    * document
    * email
    * password

* **Route**
    * id
    * start[0,0] <- Stores coordinates
    * end[0,0]  <- Stores coordinates

* **Service (Type of Car)**
    * **Uberx**
      * id
      * license
      * driver
      * passengers
      * brand
      * model
    * **UberPool**
      * id
      * license
      * driver
      * passengers
      * brand
      * model
    * **UberBlack**
      * id
      * license
      * driver
      * passengers
      * typeCarAccepted[] <- List of accepted cars
      * seatMaterial[] <- List of seat Materials
    * **UberVan**
      * id
      * license
      * driver
      * passenger
      * typeCarAccepted[] <- List of accepted cars
      * seatMaterial[] <- List of seat Materials

* **Payments**
  * **Card**
    * id
    * number
    * ccv
    * date
  * **PayPal**
    * id
    * email
  * **Cash**
    * id