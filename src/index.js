import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import './main.css'

let did = 0;
let numb = 0;
let numb2 = 0;

document.getElementById('one').addEventListener('click', addOne);
document.getElementById('two').addEventListener('click', addTwo);
document.getElementById('three').addEventListener('click', addThree);
document.getElementById('four').addEventListener('click', addFour);
document.getElementById('five').addEventListener('click', addFive);
document.getElementById('six').addEventListener('click', addSix);
document.getElementById('seven').addEventListener('click', addSeven);
document.getElementById('eight').addEventListener('click', addEight);
document.getElementById('nine').addEventListener('click', addNine);
document.getElementById('zero').addEventListener('click', addZero);
document.getElementById('ac').addEventListener('click', ac);
document.getElementById('plusmin').addEventListener('click', plusMin);
document.getElementById('percent').addEventListener('click', percent);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('x').addEventListener('click', times);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('plus').addEventListener('click', plus);
document.getElementById('comma').addEventListener('click', comma);
document.getElementById('equal').addEventListener('click', equal);

function addOne(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 1;
    }else{
        document.getElementById('text').innerHTML += 1;
    }
}
function addTwo(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 2;
    }else{
        document.getElementById('text').innerHTML += 2;
    }
}
function addThree(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 3;
    }else{
        document.getElementById('text').innerHTML += 3;
    }
}
function addFour(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 4;
    }else{
        document.getElementById('text').innerHTML += 4;
    }
}
function addFive(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 5;
    }else{
        document.getElementById('text').innerHTML += 5;
    }
}
function addSix(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 6;
    }else{
        document.getElementById('text').innerHTML += 6;
    }
}
function addSeven(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 7;
    }else{
        document.getElementById('text').innerHTML += 7;
    }
}
function addEight(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 8;
    }else{
        document.getElementById('text').innerHTML += 8;
    }
}
function addNine(){
    if(document.getElementById('text').innerHTML == "0" || did == 1){
        document.getElementById('text').innerHTML = 9;
    }else{
        document.getElementById('text').innerHTML += 9;
    }
}
function addZero(){
    if(document.getElementById('text').innerHTML != "0" || did == 1){
        document.getElementById('text').innerHTML += 0;
    }
}
function ac(){
    document.getElementById('text').innerHTML = "0";
    did = 0;
}
function plusMin(){
    numb = document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML = numb * -1;
}
function percent(){
    numb = document.getElementById('text').innerHTML;
    document.getElementById('text').innerHTML = numb / 100;
}
function divide(){
    if(did == 0){
        numb = document.getElementById('text').innerHTML;
        did = 1;
    }else{
        numb2 = document.getElementById('text').innerHTML;
        document.getElementById('text').innerHTML = numb / numb2;
    }
}
function times(){
    if(did == 0){
        numb = document.getElementById('text').innerHTML;
        did = 1;
    }else{
        numb2 = document.getElementById('text').innerHTML;
        document.getElementById('text').innerHTML = numb * numb2;
        did = 2;
    }
}