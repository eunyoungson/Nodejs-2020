//Array (배열) : 순서에 따라 length만큼의 갯수 가짐,  ['0','1','2']

//Object (객체) : 순서 X , {'key' : 'value'}

let members = ['kim','hong','Lee']
console.log(members[1]);

for(let i=0; i< members.length; i++){
    console.log('arrayloop' , members[i]);
}



let roles = { 
    'programmer': 'son',
    'designer' : 'Park',
    'manager' : 'choi'
}
console.log(roles.designer);
for(let n in roles) {  //n 자리에 것을 콘솔로그하면 key값이 나온다.
    console.log('objectkey', n, 'value',roles[n]);
    console.log('value',roles[n]);
}  // roles[n] key에 대한 정보값을 가져온다.
// n ,roles[n] 
/* 결과>
objectkey programmer value son
value son
objectkey designer value Park
value Park
objectkey manager value choi
value choi */