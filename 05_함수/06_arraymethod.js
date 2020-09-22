//array 생성
let cars = ["Saab", " volvo", "bmw"];
let person = new Array('john' , 'marry');
console.log(cars, person);

console.log(cars.length, person.length);
cars.sort();
console.log(cars);

//맨 마지막 엘리먼트
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length-1]);


let html = '';
html += '<ul>\n';
for (let fruit of fruits) {
    html += '\t<li>' + fruit + '</li>\n';
}
html += '</ul>\n';
console.log(html)

fruits[fruits.length] ='cherry';
console.log(fruits) ;//체리가 추가됨

fruits[fruits.length] ='cherry';
console.log(fruits.join(',')) ; //어레이를 스트링 형식으로 바꿀때

let item = fruits.pop();
console.log(item, fruits);//마지막 요소가 없어지면서 빠져나온다.

let shiftitem = fruits.shift();
console.log(shiftitem,fruits);//처음 요소가 없어지면서 나온다

fruits.unshift('lemon');
console.log(fruits); //레몬이 젤 앞에 추가 푸쉬는 뒤에 추가

//푸싀(마지막에 추가)와 팝(마지막게 지워지면서 빠져나옴)이 많이 사용

delete fruits[0];
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];
let spliceitem = fruits.splice(2,1);
console.log(spliceitem, fruits);

console.log(cars.concat(fruits));

let citrus = fruits.slice(2);
console.log(citrus);
citrus = fruits.slice(1 ,3);
console.log(citrus);

console.log(fruits.toString());

fruits.forEach(function(value,index) {
    console.log(index, value)
});