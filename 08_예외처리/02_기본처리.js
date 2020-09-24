function callThreeTimes(callback) {
    if(callback) {
        for (let i=0; i<3; i++) {
            callback();
        }
    } else {
        console.log('callback 함수를 정의하세요');
    }
}
callThreeTimes( function() {
    console.log('호출') 
}) ; 
//익명함수를 넣지 않으면 에러처리가 된다.

callThreeTimes();

//try catch finally 구문으로 처리한다.