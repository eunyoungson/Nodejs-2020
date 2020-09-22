funtion callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}
//callFiveTimes(여기에 익명함수를 넣는다)
callFiveTimes(function() {
    console.log('function call');
});