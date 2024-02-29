
/*
function reverse (str){
    
    var newStr=""
    
    for (var i=str.length-1 ;i>=0; i--){
    
    newStr+=str[i]
    }
    return newStr
    }
    
    console. log(reverse ("hello world"))

    //

    function counter (str){
    let count=0
    for (let i=0; i<str.length;i++) { 
     count++
    }
    return count;
    }


    // 
    console. log(counter ("hello"));


    function CapitalizeWord(str){

    let mystr = str.split(' ');
    for (let i = 0; i< mystr. length;i++) {
    mystr[i] = mystr [i][0]. toUpperCase() + mystr[i].substr(1); }
    return mystr. join('');
    }
    console.log(CapitalizeWord("hello world"));
*/
    /*


    function findMax(arr) {
        if (arr.length === 0) {
            return "The array is empty";
        }
    
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    
        return max;
    }
    
    // Function to find the minimum value in an array
    function findMin(arr) {
        if (arr.length === 0) {
            return "The array is empty";
        }
    
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    
        return min;
    }
        console.log(findMax([1,2,3,4])); 




   function sum (arr) {
    var sum = 0 ; 
    for (i = 0 ; i < arr.length ; i++ ) {
        sum += arr[i]
    }
    return sum ; 
   } 
   console.log(sum([1,2,3,7]));

   
   function filterArray(arr, condition) {
   
    let filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        if (condition(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    
    return filteredArr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredGreaterThan5 = filterArray(arr, function(element) {
    return element > 5;
});
console.log(">5:", filteredGreaterThan5);

   


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial (4));



function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    
    return true; 
}

console.log(isPrime(4));

*/


function generateFibonacci(n) {
    const sequence = [0, 1]; 
    
   
    for (let i = 2; i < n; i++) {
        const nextFibonacci = sequence[i - 1] + sequence[i - 2]; 
        sequence.push(nextFibonacci); 
    }
    
    return sequence;
}

console.log(generateFibonacci(4));


