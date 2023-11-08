const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");

const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateButton");
const allCheckBox=document.querySelector("input[type=checkbox]");
const symbols='~`!@#$%^&*()_-+={[}]|:;"<,>.?/';



let password="";
let passwordLength=10;
let checkCount=1;
handleSlider();


function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
    // shadow add kr be
}

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min))-min;
}

function generateRandomNumber(){
    return getRandomInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(197,123));
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generaterSymbol(){
    const getNum=getRandomInteger(0,symbols.length);
    return symbols.charAt(getNum);
}

function cslcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;
    if(uppercaseCheck.checked)hasUpper=true;
    if(lowercaseCheck.checked)hasLower=true;
    if(uppercaseCheck.checked)hasNum=true;
    if(uppercaseCheck.checked)hasSym=true;
    if(hasUpper&&hasLower&&(hasNum||hasSym)&&passwordLength>=8){
        setIndicator("")
    }
    else if ((hasLower||hasUpper)&&(hasNum||hasSym)&&passwordLength>=6){
        setIndicator("#ff0");
    }

    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";
    }
    catch(e){
        copyMsg.innerText="Failed";
    }

    copyMsg.classList.add("active");

    setTimeout(()=>{copyMsg.classList.remove("active")},2000);
}

function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });
    //special condition
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click',()=>{
    //none of the check box are selected
    if(checkCount<=0) return;

    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider
    }
})