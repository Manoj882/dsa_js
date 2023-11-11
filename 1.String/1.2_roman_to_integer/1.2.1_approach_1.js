

const romanValue = function(r){
    if(r == 'I') return 1;
    if(r == 'V') return 5;
    if(r == 'X') return 10;
    if(r == 'L') return 50;
    if(r == 'C') return 100;
    if(r == 'D') return 500;
    if(r == 'M') return 1000;

}

const romanToInteger = function (str){
    let result = 0;
    let inputSize  = str.length;

    
    for(let i = 0; i < inputSize; i++){
        let s1 = romanValue(str.charAt(i));

        if(i+1 < inputSize){
            let s2 = romanValue(str.charAt(i+1));

            if(s1 >= s2){
                result = result + s1;
            } else {
                result = result + s2 -s1;
                i++;
            }
        } else {
            result = result + s1;
        }
    }
    return result;
}

let output = romanToInteger('IV');
console.log('Numerical value of given roman number is: ' + output);