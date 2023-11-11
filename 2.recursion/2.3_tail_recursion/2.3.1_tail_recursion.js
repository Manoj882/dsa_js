/* 
    A recursive function is said to be tail recursive if the recursive call 
    is the last thing done by the function. There is no need to keep record 
    of hte previous state.

*/

const func = (n) => {
    if(n == 0) {
        return;
    } else {
        console.log(n);
        return func(n-1);
    }
}

const input = 3;
const output = func(input);
console.log(output);