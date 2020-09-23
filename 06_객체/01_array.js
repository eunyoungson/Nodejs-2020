//배열

let arrayPersonInfo = ['홍길동','남자',29];
console.log(arrayPersonInfo[0], arrayPersonInfo[1], arrayPersonInfo[2]);

//객체(Object) - key, value 쌍으로 구성
let personInfo = {
    'name' : '홍길동',
    'gender' : '남자',
    'age' : 29
}
let g ='gender'
console.log(personInfo['name'], personInfo[g], personInfo['a'+'ge']); //age 띄어도 여기는 가능,아래 형식은 안됨
console.log(personInfo.g); // 여기는 에러난다.

let person = {
    name : '홍길동', gender : '남자', 나이 : 29
} // 키 값에 한글보다는 영어로 쓰자(한글도 가능하나 다른 프로그램 언어에서 어쩔지 모름)

console.log(person.name, person.gender,person.나이);
