//1.기본함수
/* function f123() {
    console.log(1);
    console.log(2);
    console.log(3);
}

f123();
console.log(f123()); */

//2.함수의 입력 <parameter , argument>
function sum(first, second) { //parameter(매개변수)
    console.log(first+second);
}

sum(2,4); //argument

function sum(first, second) { //parameter(매개변수)   
    console.log('a');
    return first+second; 
    console.log('b');
}
//return 은 출력과 종료를 가진 키워드이므로 'b'는 출력이 되지 않는다.
console.log(sum(2,4)); //argument


