//////////////// Snuffy Scripts /////////////////////////
function colorChange() {
    // alert("you made it to ColorChange!")
    document.getElementById('snuffy-section-title').style.color='RebeccaPurple';
    // return false;
}

function colorBack() {
    document.getElementById('snuffy-section-title').style.color='steelblue';
}

const snuffyPic = document.getElementById('snuffyPic');
fallRtBtn.addEventListener(click, 'fallRight');
const fallRtBtn = document.getElementById('fallRight');

function fallRight() {
    // document.getElementById('snuffyPicStart').style.transform;
    currentDeg += 90
    // currentDeg = currentDeg + 90
    snuffyPic.style.transform = "rotate(90deg)";
}

function fallLeft() {
    document.getElementById('snuffyPicStart').style.transform = "rotate(-90deg)";
}

function spinClock() {
    console.log('spinClock')
    document.getElementById('snuffyPicStart').classList.add('rotate-clock');
}

function spinWidder() {
    document.getElementById('snuffyPicStart').classList.add('rotate-widd');
}


function snuffyStyleScared() {
    alert('confused button!');
    document.getElementById('snuffyPicStart').src = 'images/elephantScared.png';
}

function snuffyStyleBlue() {
    alert('you took the blue pill');
    document.getElementById('snuffyPicStart').src = 'images/elephantBlue.png';
}

function snuffyStylePaisley() {
    alert("It's your birthday!");
    document.getElementById('snuffyPicStart').src = 'images/elephantPaisley.png';
}

///////////////////////////Color Change Script////////////////////////////

function changeColor(color) {
    let clrText = document.querySelector("#colorText");
    clrText.style.color = color;
}

/////////////////////////Love Calculator Script///////////////////////////

function loveCalculator() {
    let name = prompt ("what is your name");
    let name2 = prompt ("what is your intended's name?");
    
    var loveScore = Math.random() *100;
    loveScore = Math.floor(loveScore) +1;
    
        if (loveScore >=70) {
            alert ("Wow! your love score is " +loveScore+ "%, there is some sizzling chemistry here, congratulations!" )
        }
        
        if (loveScore >30 && loveScore <=69) {
            alert ("meh, your love sore is " +loveScore+ "%, you have potential, but it will take work.");
        }
        
        if (loveScore <30) {
            alert ("boo!  your love score is " +loveScore+ "%, you should walk away and cut your losses");
        }
    }

/////////////////////////Time Calculator Script////////////////////////////

const timeBtn = document.querySelector("#TimeCalc-btn");
const timeClick = timeBtn.addEventListener('click', timeCalculator);

function timeCalculator(){
    let name = prompt ("What is your name?");
    let ageYears = prompt ("Hi, " + name + "! If you tell me your age in years, I will tell you how many days, weeks and months left until your 90th birthday.  Please list your age in years below.");
    var yearsLeft = (90-ageYears);
    var days = (yearsLeft*365);
    var weeks = (yearsLeft*52);
    var months = (yearsLeft*12);
    alert ("Ok, " + name + " you have " + days + ", " + weeks + ", and " + months + " left before your 90th year. Spend it well, Live long and Prosper, Be excellent and party on."); 
}
    // let btn = document.getElementById("TimeCalc-btn");
    // btn.addEventListener('click', event => {
    //   TimeCalculator();
    // });

//////////////////////////BMI Calculator Script////////////////////////////

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);  
    if (Math.round (bmi<18.5)) 
       return ("your BMI is " +bmi+ ", so you are underweight.");
    if (Math.round (bmi >=18.5 && bmi<=24.9))
       return ("your BMI is " +bmi+ ", so you have a normal weight.");
    if (Math.round (bmi >24.9)) 
       return ("your BMI is " +bmi+ ", so you are overweight.");
}
 bmiCalculator(65, 1.8);

 // alert ("your BMI is " +bmi+ ", so you are underweight.");
// alert ("your BMI is " +bmi+ ", so you have a normal weight.");
// alert ("your BMI is " +bmi+ ", so you are overweight.");

/////////////////////////////Dice Roll Script/////////////////////////////

///////////////////////////Recipe Finder Script//////////////////////////