console.log('<Array 값>');
let arrayPersonInfo = ['홍길동','남자',29];
console.log(arrayPersonInfo[0], arrayPersonInfo[1], arrayPersonInfo[2]);

console.log('<Array for문 값>');
for(let n of arrayPersonInfo) { console.log(n, arrayPersonInfo[1]) };
for(let n of arrayPersonInfo) { console.log( arrayPersonInfo[1]) };
for(let n of arrayPersonInfo) { console.log( n) };

console.log('<object Array 의 값>');
let person = { name : '홍길동', gender : '남자', 나이 : 29 };
console.log(person.name, person.gender,person.나이);

console.log('<object Array for문 값>');
for(let n in person) { 
     console.log('objectkey', n, 'value',person[n]);
    console.log('value',person[n]);
}

console.log('<복합 object Array의 for문 값>');
let persons = [
    {name : '홍길동', gender : '남자', age : 29},
    {name : '성춘향', gender : '여자', age : 29},
];

for (let person of persons) {
    console.log(person.name, person.gender,person.age);
}  