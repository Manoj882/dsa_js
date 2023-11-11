/*

*/

const func = (n) => {
    if(n == 0) return;
    func(n-1);
    console.log(n);
    

} 
const input = 3;
const output = func(input);
console.log(output);

//Output: 1 2 3