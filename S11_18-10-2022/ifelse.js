function printPsoitiveNegative(num) {
  if (num >= 0) {
    console.log(num, " is a positive number");
  } else {
    console.log(num, " is a negative number");
  }
}

// printPsoitiveNegative(10);
// printPsoitiveNegative(-5);

function printEvenOdd(input) {
  if (input % 2 == 0) {
    console.log("given number is even");
  } else {
    console.log("given number is odd");
  }
}

printEvenOdd(11);
