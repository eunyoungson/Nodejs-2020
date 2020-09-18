//원 들레와 면적
let pi = 3.14159;
let radius = 5;
console. log(`반지름이 ${radius}인 원의 둘레는 ${2*pi*radius}입니다`)

//문자열 복합 대입 연산자
let output = 'hello'
output += 'world';
output += '숫자도 가능하니다.';
output += 235; //결과가 문자열로 된다
console. log(output);

//6가지 자료형
typeof('string'); //문자
typeof(273); //숫자
typeof(true); //bool
typeof(function() {}); //function
typeof({}); //object
typeof(alpha); //undefined

// console. log(typeof(function() {})); 이런식으로 표현한다.

console. log(typeof(function() {})); 

//자료형 변환
console.log(Number('273'));
console.log(Number(true));
console.log(Number('52.7'));

console.log(parseInt('273'));
console.log(parseInt(true));
console.log(parseInt('52.7'));

console.log(parseFloat('273'));
console.log(parseFloat(true));
console.log(parseFloat('52.7'));

//일치형 연산자 : 자바스크립트는 =는 3개를 해준다!
console.log(`52== '52': ${52=='52'}`);
console.log(`52=== '52': ${52==='52'}`);
console.log(`0 == "" : ${0==""}`);
console.log(`0 === "" : ${0===""}`);

//상수
const constant = '상수';
//constant =  'Constant'
console.log(constant);