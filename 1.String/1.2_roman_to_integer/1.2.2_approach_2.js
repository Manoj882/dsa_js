
const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50, 
    'C': 100,
    'D': 500,
    'M': 1000
};
 
const romanToInteger = (str) => {
    let result = 0;
    let inputSize = str.length;

    for(let i = 0; i < inputSize; i++){
        let curr = romanMap[str[i]];
        let next = romanMap[str[i+1]];
    
        if(curr < next){
            result += next - curr;
            i++;
        } else {
            result += curr;
        }
    }
    return result;
}

const output = romanToInteger('VIII');
console.log(output);