
/*
    ***************** Program to Understand Indirect Recursion

    Write a program (WAP) to print numbers from 1 to 10 in such a way
    that when number is odd, add 1 and when number is even, subtract 1.

*/

let n = 1;

const odd = () => {
    if(n <= 10){
        console.log(n + 1);
        n++;
        even();
    }
    return;
  }

const even = () => {
    if(n <= 10) {
        console.log(n-1);
        n++;
        odd();
    }
    return;

}

const mainFunc = () => {
    odd(n);
}


const output = mainFunc();
console.log(output);
