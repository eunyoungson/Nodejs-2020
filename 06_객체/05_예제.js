let cart = [
    {
        product : {name : '치약', volume: 500, price : 3000},
        quntitiy : 5  
    },
    {
        product : {name : '비누', volume: 500, price : 1000},
        quntitiy : 4   
    }
];
//카트의 합계 --> 반복문 필요
console.log(cart[0].product.price);
let sum = 0;  //초기화 하고..
for (let item of cart) {
    sum += item.product.price* item.quntitiy ;
}
console.log(sum ) ;