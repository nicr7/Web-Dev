// yaha pr querySelector ek element de rha hai jo ki object hai
// aur object ko const bna dia hai means its address change nhi kr paoge not value in it
const countValue=document.querySelector('#counter');

function increment(){
    let value=parseInt(countValue.innerText);
    value+=1;
    countValue.innerText=value;
}

function decrement(){
    let value=parseInt(countValue.innerText);
    value-=1;
    countValue.innerText=value;
}