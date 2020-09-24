try {
    error.error.error(); //의심스런  코드 여기다 넣는다.
} catch (e) {
    console.log(e.name) ;
    console.log(e.message) ;
}
console.log('프로그램 정상 종료');
