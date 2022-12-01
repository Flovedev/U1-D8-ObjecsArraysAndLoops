/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 1:---------\n");

let exc1 = [1, 2, 3, 4, 5];
console.log(exc1);


/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 2:---------\n");

let exc2 = {
    name: "Florencio",
    surname: "VIllanueva",
    email: "flovedev@gmail.com",
    age: 30,
};

console.log(exc2);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 3:---------\n");

exc2.drivingLicense = false;
console.log(exc2);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 4:---------\n");

delete exc2.age;
console.log(exc2);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 5:---------\n");

let exc5 = {
    name: "Bianca",
    surname: "Stancu",
    email: "ivented@lol.com",
    age: 30,
};

let isSameEmail = exc2.email === exc5.email;
console.log("Do they have the same email?", isSameEmail);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 6:---------\n");

let exc6 = {
    name: "Lolencio",
    totalShoppingCart: 49,
};

if (exc6.totalShoppingCart >= 50) {
    console.log("Your total price is:", exc6.totalShoppingCart, "and you have free shipping!")
} else {
    console.log("Your total price is:", exc6.totalShoppingCart, "+ 10 for the shipping cost. Total =", exc6.totalShoppingCart + 10)
};

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 7:---------\n");

let blackFriday = exc6.totalShoppingCart * 0.8;

if (blackFriday >= 50) {
    console.log("Your total price is:", blackFriday, "and you have free shipping!")
} else {
    console.log("Your total price is:", blackFriday, "+ 10 for the shipping cost. Total =", blackFriday + 10)
};


/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 8:---------\n");

let exc8 = {
    brand: "lolcar",
    model: "maxtroll",
    licensePlate: "1234jk",
}
console.log(exc8);

let clone1 = {};
clone1 = Object.assign(clone1, exc8);
clone1.licensePlate = "5678as";
console.log(clone1);

let clone2 = {};
clone2 = Object.assign(clone2, exc8);
clone2.licensePlate = "9123qw";
console.log(clone2);

let clone3 = {};
clone3 = Object.assign(clone3, exc8);
clone3.licensePlate = "4567er";
console.log(clone3);

let clone4 = {};
clone4 = Object.assign(clone4, exc8);
clone4.licensePlate = "8901ty";
console.log(clone4);

let clone5 = {};
clone5 = Object.assign(clone5, exc8);
clone5.licensePlate = "2345ui";
console.log(clone5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 9:---------\n");

let carsForRent = [exc8, clone1, clone2, clone3, clone4, clone5];

console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 10:---------\n");

carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 11:---------\n");

console.log(typeof exc8);
console.log(typeof exc8.licensePlate);
console.log(typeof exc8.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 12:---------\n");

let carsForSale = [];
carsForSale.push(clone1, clone2, clone3);

let totalCars = carsForSale.length;
console.log("Total of cars:", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 13:---------\n");

for (let index = 0; index < carsForSale.length; index++) {
    let exc13 = carsForSale[index];

    console.log(
        "This is my loop:",
        exc13
    );
}