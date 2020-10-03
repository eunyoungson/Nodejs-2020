let size = -10;  //음수이므로 오류가 뜬다

try {
    let array = new Array(size); //size 만큼의 length를 가진 array를만들 수 있음.
} catch (e) {
    console.log(e.name);
    console.log(e.message);
    console.log('양의 정수를 입력하세요');
}


