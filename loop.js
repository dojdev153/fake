//functions
/* expressions functions
const square = function (num){
    return num * num;
}
console.log(square(78));*/
/* arrow functions
const mult = (a, b) => a * b;
console.log(mult(12, 12));*/

/*function createMulti(multi, num){
    return multi * num;
}
console.log(createMulti(5, 2))*/


//IF CONDITIONS
 
/*var num1 = 1;
var num2 = 1;
if (num1 != num2){
    console.log("they are not equal");
} else {
    console.log("they are equal")
}*/
/*
var num1= 3;
var num= 3;
var sub= num - num1;
if (sub= -sub){
    console.log("the difference is negative");
} else if (sub= 0){
    console.log("the difference is zero");
} else {
    console.log("the difference is positive");
}*/

/*function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function afterGreeting() {
    console.log("This is a callback function.");
}

greet("Dave", afterGreeting);
// Output:
// Hello, Dave!
// This is a callback function.*/

/*function myMap(array){

}*/
/* function myMap(array, callback) {
    const result = [];
    for (let i = 0; i = array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Example usage:
const numbers = [1, 2, 3, 4];
const doubled = myMap(numbers, num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]*/
//for (let i=0;i<=10;i++){
 //   sum +=1;
//}
//console.log (i);

    /*let count=10;
    let sum= 0;
    do{
        sum +=count
        count
        console.log(sum)
    }while(count<10);
*/
/*
function vowels(name){
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
    let meno=name.split('');
    for(i=0;i<meno.length;i++){
        for(j=0;j<10;j++){
if(meno[i]==vowels[j]){
meno[i]=''
break;
}
        }
    }
    let mene=meno.join('')
    console.log(mene)
}
console.log(vowels("crank"))*/

/*function loop(){
    for (i=1;i<=10;i++){
        console.log(i) 
    }
}*/


  //  let sum=0;
 //   for (i=1;i<=100;i++){
 //       sum+=i
 //   }
 //   console.log(sum)
 /*function loop3(){
    for (i=1;i<=10 ;i++){
        if (i%2==0){
        console.log(i)
        }
    }
 }
 console.log(loop3())*/
 /* 
 function multi(){
    for (i=1; i<=10;i++){
        mult=i * 5;
        console.log(mult)   
    }
 }
 console.log(multi())*/
 function looop4(){
    sum=0;
    for (i=1;i<=100;i++){
    sum+=i;
    }
    console.log(sum);
 }
 console.log(looop4())

 let char="hello";
 for (i=0;i<5;i++){
    console.log(char);
 }

 for(i=1;i<=5;i++){
   square=i*i;
   console.log(square); 
 }

 let arr=[1,2,3,4,5];
 var sum=0;
 for ( i=0; i<arr.length;i++){
     sum += arr[i];
 }
 console.log(sum);





