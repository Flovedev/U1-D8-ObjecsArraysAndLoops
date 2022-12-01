// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 1:---------\n");

let exc1 = [1, 2, 5];
console.log("Normal order:", exc1);

let reverseExc1 = exc1.reverse();
console.log("Normal order:", reverseExc1);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 2:---------\n");

let exc2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Normal order:", exc2);

console.log("Maximun numerical value:", Math.max(...exc2));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 3:---------\n");

console.log("Minimun numerical value:", Math.min(...exc2));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("Even numbers:");

for (let index = 1; index < exc2.length; index += 2) {
    let exc5 = exc2[index];
    console.log(
        exc5,
    )
};

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 5:---------\n");

for (let index = 0; index < exc2.length; index++) {
    if (index % 2 === 0);
    exc2.splice(index);
    console.log("Result:", index);
}


/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 6:---------\n");

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 7:---------\n");

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

console.log("\n----------Excercise 8:---------\n");
