// String length
let hello = '안녕하세요?';
console.log(hello.length);

//string 안에서 string 을 찾을때
console.log( hello.indexOf('하'));
console.log( hello.indexOf('한')); //없으면 결과값이 -1나온다.
// 0 과 양수가 나오면 데이터안에 찾는것이 있다!


let str = "please locate where 'locate' occurs!";
let pos = str.IndexOf("locate");
let pos = str.lastIndexOf("locate");
console.log(pos);

console.log(str.search('locate'));

//문자열의 일부분 추출
str =  "Apple, Banana, Kiwi";
let res = str.slice(7,13);//7~12, 13번째 앞에것까지/0번부터 시작 ->그래서 쉼표가 안들어간다.
console.log(res);
console.log(str.slice(-4)); //뒤에서 부터

console.log(str.substr(7,6)); //시작인덱스, 갯수

//문자열 대체
let newStr =str.replace(',',':'); // 맨 처음것 하나만 바뀐다
console.log(newStr);
newStr = str.replace(/,/g,':');//모두다 바뀜 /,/g ->Regular Expression정규표현식
console.log(newStr);

//공백제거
str = "       Hello World!        ";
console.log(str);
console.log(str.trim()); //trim 양쪽 공백 없앤다. 파이썬에서는 strip

//어떤 문자를 끄집어 내는것(문자 추출)
console.log(hello.charAt(2));
console.log(hello.charAt(2), hello[2]);

//Converting a String to an Array 문자열을 어레이로 변경
let txt = "a,b,c,d,e";  
console.log(txt.split(','));
//결과: [ 'a', 'b', 'c', 'd', 'e' ]
