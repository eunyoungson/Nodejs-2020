/* let date =new Date();
let hour = date.getHours();

if (hours < 11) {
    console.log(`아침메뉴`);
} else {
    if (hour < 15) {
        console.log(`점심메뉴`);
    } else {
        console.log(`저녁메뉴`);
} */

//else if

/* if (hour < 11) {
    console.log(`아침메뉴`);
} else if  (hour < 15){
    console.log(`점심메뉴`);
} else {
    console.log(`저녁메뉴`)
} */

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('성적 입력>');
rl.prompt();
   
rl.on('line', function(buf) {
 //입력을 받아서 처리하는 로직
let score = parseInt(buf);
let grade;
    if (  score>= 90) {
        grade= 'A';
    } else if ( score >= 80 ){
        grade = 'B';
    } else if ( score >= 70){
        grade='c';
    } else if ( score >= 60){
        grade='d';
    } else   {
        grade='f';
    }
    console.log(`성적: ${score}, 학점 : ${grade}`) ;
    rl.close();
}); 

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('성적 입력>');
rl.prompt();
   
rl.on('line', function(buf) {
 //입력을 받아서 처리하는 로직
let score = parseInt(buf);
let grade;
    if (  score>= 90) {
       console.log( grade= 'A');
    } else if ( score >= 80 ){
        console.log( grade= 'B');
    } else if ( score >= 70){
        console.log( grade= 'C');
    } else if ( score >= 60){
        console.log( grade= 'D');
    } else   {
        console.log( grade= 'F');
    }
    console.log(`성적: ${score}, 학점 : ${grade}`) ;
    rl.close();
}); 


/* switch(parseInt(score/10)) {
    case 10 :
    case 9:
        grade = "a";
        break;
    case 8:
        grade = "b";
        break;
    case 7:
        grade = "c";
        break;
    case 8:
        grade = "d";
        break;
    default:
        grade = "f";
       
}
console.log(`성적 : ${score}/ 학점 : ${grade}`)
rl.close();
}); */