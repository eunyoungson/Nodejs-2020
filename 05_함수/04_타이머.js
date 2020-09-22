let today = new Date();
console.log(today);

setTimeout(function() {
    console.log('3초경과');
    today = new Date();
    console.log(today);
}, 3000);

/* setInterval(() => {
    console.log(new Date());
}, 1000); */

//5초 후 중지하게 하는
setTimeout(function() {
    clearInterval(si);
}, 5000);

let si = setInterval(() => {
    console.log(new Date());
}, 1000);