//VERBAL Questions//
//1. parameters are listd in the fuctions definition, essentially placeholders for the arguments that will be passed
//2. return let's you pass the result of a function to a variable or somewhere else in the program, console log just prints it to the console where it can't be interacted with from there
//3. returning a value makes the value available to be used elsewhere in the programming

//2. PALINDROME
function checkPalindrome(string){
    // take the string, split it as one, reverse that, compare those two arrays
    let splitStr = string.split('');
    let revStr = splitStr.slice().reverse();
    //do it this way because just reversing does it in place, mutating the original array
    //console.log(splitStr,revStr)
    for (let i = 0; i < string.length;i++){
        if (splitStr[i] === revStr[i]){ 
        return true;
        } else {
            return 'not a palindrome';
        }
    }
    };

word = 'racecar'
console.log(checkPalindrome(word))

//3. Check a list

const students = ['Billy', 'Jimmy','Sally','Stalin','Betty'];
const checkStudent = 'Stalin';

function checkList(list, name){
    for (let i=0;i<list.length;i++){ ////if it finds a student it will return true
        if (list[i] === name) {
            return true;
        } else {
        }
    } return false
}
console.log(checkList(students,checkStudent))

//4. Sum Array

const array = [1,2,3,4];
let sum = 0

function sumArray(arr){
    for (let i=0;i<arr.length;i++){
        sum = arr[i] + sum;
    }
    return sum;
}
console.log(sumArray(array))

//5. Digit Sum
let ssum= 0
function digitSum(num){
    let arrayS = (''+num).split('');
    let arrayN = arrayS.map(Number);
    for (i=0;i<arrayN.length;i++){
        ssum = arrayN[i] + ssum;
    }
    return ssum;
}
console.log(digitSum(21))


// Pythagoras
function calculateSideC(sideA, sideB){
    const sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2))
    return sideC;
}

console.log(calculateSideC(2,4))

//Prime Numbers

function checkyPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <=s; i++)
        if (num % i === 0 ) return false;
        return num >1;
}

function printPrimes(start, end){
    for(let i = start; i <= end; i++){
        console.log(checkyPrime(i), i)
    }
}
printPrimes(5,100)

// Insert Dash ///

function insertDash(number){
    //make number an array, conv to string, then to array of strings
    let arr = []
    let string1 = number.toString()
    for (x in string1){
        arr.push(string1[x])
        x++
    }
    //conver arr of strings to arr of num
    for (let z=0; z<arr.length;z++){
        arr[z] = parseInt(arr[z])}

    //test for consecutive odd number in arr
     for (let y=0; y < (arr.length - 1);y++) {
        if ((arr[y] % 2 != 0) && (arr[y+1] % 2 != 0)) { 
            arr.splice(y+1,0,("-"))}
            } 
    return arr        
    }
    // the above return is just to test if the dashes are put in place, but this goes ahead and crashes my console. can't find the bug

console.log(insertDash(433))
