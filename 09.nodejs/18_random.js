/* /* function randInt ( from, to) {
    return Math.floor(Math.random()*(to - from +1) + from);
} 

for (let i=0; i<5; i++) {
    console.log(randInt(1,5));
} */

 /* const myModule = require('./17_exports');
for (let i=0; i<5; i++) {
    console.log(myModule.randInt(1,5));
}  */

//17.18번 연결하는것--> exports ,require
const myModule = require('./17_exports');
for (let i=0; i<5; i++) {
    //console.log(myModule.area(myModule.randInt(1,5)));
    console.log(myModule.area(i));
}