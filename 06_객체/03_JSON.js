//밖(외부)으로 내보낼때 stringfy

let persons = [
    {name : '홍길동', gender : '남자', age : 29},
    {name : '성춘향', gender : '여자', age : 29},
];

let externalForm = JSON.stringify(persons);
console.log(externalForm);

//자료 받아올때(외부에서 받은걸 프로그램 안에서 이용할때) parse

let p = JSON.parse(externalForm);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}
//결과 : 홍길동 남자 29
//      성춘향 여자 29

console.log( p[0] );  //오브젝트 전체가 다 나온다. 
//결과 : { name: '홍길동', gender: '남자', age: 29 }

console.log( p[0].name) ;//홍길동만 나온다