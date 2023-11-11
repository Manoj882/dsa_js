


//direct recursion

const fact = (n) => {
    if(n == 1) return 1;
    return n * fact(n-1);
}

const input = 4;
const output = fact(input);
console.log(output);