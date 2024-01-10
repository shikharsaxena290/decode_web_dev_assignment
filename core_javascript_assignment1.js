/*
Q1. Write a program that grade students based on their marks.
If greatqr than 90 thqn A Gradp
If between 70 and 90 thqn a B gradp
If between 50 and 70 thqn a C gradp
Bqlow 50 thqn an F grade
 */

var grade = 84;
if(grade>=90){
    console.log("A grade")
}else if(grade>=70 && grade<90){
    console.log("B grade")
}else if(grade>=50 && grade<70){
    console.log("C grade")
}else{
    console.log("F grade")
}

//output:- B grade

//---------------------------------------------------------------------------------------------------------------------------------------------

// Q2. Generate number' between any 2 given numbers.

var num=10
var num1=25

for(let i= num+1;i<=num1 ; i++){
    console.log(i)
}

//output:-
/*11
12
13
14
15
16
17
18
19
20
21
22
23
24
25 */

//---------------------------------------------------------------------------------------------------------------------------------------------

// Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
// “positive” if the number is positive and similarly for negative and zero also.

num=23
num>0?console.log("positive"):num<0?console.log("negative"):console.log("zero");

//output:-
//positive

//--------------------------------------------------------------------------------------------------------------------------------------------

// Q4. Describe the usage of the comma operator in JavaScript and provide an example.

/*Comma operator allows us to evaluate multiple expressions in a single statement like declaring multiple
variables in a single statement separating them with the comma operator. */

var a=0, b=1, c= 2;
console.log(a,b,c)

//output:- 0,1,2

//--------------------------------------------------------------------------------------------------------------------------------------------

//Q5. You're creating a basic login system. Make a login function with two things: a username and a
// password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
// successful"; if not, show "Invalid credentials."

var username="admin"
var password= 12345

if(username=="admin"){
    if(password==12345){
        console.log("login successful");
    }else{
        console.log("invalid password");
    }
}else{
    console.log("invalid username");
}

//output:-
//login successful

//----------------------------------------------------------------------------------------------------------------------------------------------

//Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
// method ("credit", "debit", or "paypal") as input and uses a switch statement to determine and print the
// processing fee associated with each payment method. For example, "credit" may have a processing fee of
// 2%, "debit" 1.5%, and "paypal" 3%.

var method="credit"
switch (method){
    case "credit":
        console.log("processing fee associated with credit : 2%");
        break
    case "debit":
        console.log("processing fee associated with debit : 1.5%");
        break
    case "paypal":
        console.log("processing fee associated with paypal : 3%");
        break
}
//output:-
//processing fee associated with credit : 2%

//----------------------------------------------------------------------------------------------------------------------------------------------

// Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
// as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
// temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate".

let temp=10;
temp>30?console.log("hot"):console.log("moderate")

//output:-
//moderate

//----------------------------------------------------------------------------------------------------------------------------------------------

// Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
// positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
// given integer.

var sum=0
var current_num=1
var target_num=10
do{
    sum+=current_num
    current_num++
}while(current_num<=target_num){
    console.log(`sum of the number from 1 to ${target_num} is ${sum}`)
}

//output:-
//sum of the number from 1 to 10 is 55