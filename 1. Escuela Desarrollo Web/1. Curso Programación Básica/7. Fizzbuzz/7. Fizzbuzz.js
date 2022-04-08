// alert("Works!")

var numeros = 100;
// var divisible = false; | Method 1 (more code) to not write numbers that arent divideable

for (i = 1;  i <= 100; i++) {

    divisible = false;

    if (i % 3 == 0) {
        document.write("Fizz");
        // divisible = true; | Method 1 
    }
    if (i % 5 == 0) {
        document.write("Buzz");
        // divisible = true; | Method 1 
    }

   /* | Method 1
    if (!divisible)
    {
        document.write(i);
    }
    */

    if (i % 3 != 0 && i % 5 != 0)
    {
        document.write(i);
    }

    document.write("<br/>");
    
}