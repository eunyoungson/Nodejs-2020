let persons = 
    {name : '홍길동', gender : '남자', 나이 : 29}


//for of 는 에러!
/* for (let item of person) {
    console.log(item);
}  */

for (let key in person) {
    console.log(key, person[key]);
}  

//아래와 같이 많이 쓴다!!
let persons = [
    {name : '홍길동', gender : '남자', age : 29},
    {name : '성춘향', gender : '여자', age : 29},
];

for (let person of persons) {
    console.log(person.name, person.gender,person.age);
}  