// function declaration

run();

function run(){
    console.log('running');
}

run();

// Named function assignment
let stand=function walk(){
    console.log('walking');
}
// walk(); you cannot do this
stand();

// anonymous function assignment 

let stand2=function(){
    console.log('shooting');
}

stand2();

//dynamic language

let x=1;
x='a';
x='let it be'
console.log(x);

function sum(a,b){
    console.log(arguments);
    console.log(a+b);
}

sum(1,2,3,4,5);

function summ(){
    let total=0;
    console.log(arguments);
    for(let value of arguments){
    total=total+value;
    }
    return total;
}
console.log(summ(1,2,3,4,5,6));

//default arguments

function interest(p,r=3,y){
    return p*r*y/100;
}

console.log(interest(1000,undefined,4));

