//밖으로 내보낼때

let persons = [
    {name : '홍길동', gender : '남자', age : 29},
    {name : '성춘향', gender : '여자', age : 29},
];

let externalForm = JSON.stringify(persons);
console.log(externalForm);

//자료 받아올때

let p = JSON.parse(persons);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}
console.log( persons[0] );  //오브젝트 전체가 다 나온다.
console.log( persons[0].name) ;//홍길동만 나온다