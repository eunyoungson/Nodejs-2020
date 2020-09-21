/*let today = new Date()
console.log(today);
 console.log(today.toLocaleString());
console.log(today.toISOString()); */

/* const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
let date = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(date); */

let today = new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()+1);
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

//오전 오후 구분하기
if (today.getHours() < 12) {
    console.log(`오전입니다`)
} else {
    console.log(`오후입니다`)
}

