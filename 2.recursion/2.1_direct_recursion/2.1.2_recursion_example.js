
const calcFunc = (n) => {
    if(n == 1){
        return 1;
    } else {
        return 1 + calcFunc(n-1);
    }
}

const input = 3;
const output = calcFunc(input);
console.log(output);

//output: 3 2 1
