//시간측정을 시작합니다 61page
console.time('alpha');

/* var output =1;
for (var i; i<=10; i++) {
    output *= i;
} */

let sum = 0;
for (let i=1; i<=1e6; i++) {
    sum +=i;
}
console.log('result:',output);