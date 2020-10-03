let cart = [
    {product:{name:'치약' ,price: 3000} ,quantity: 3 },
    {product:{name:'비누' ,price: 500} ,quantity:2},
    {product:{name:'과자' ,price: 1500} ,quantity:10}    
];

//JSON으로 만들어보면...

console.log(JSON.stringify(cart));

//비누의 단가는?
console.log(cart[1].product.price);

//전체 총 가격은 얼마인가?
 let sum = 0 ;

    for(let item of cart) {
        sum +=  (item.product.price)* (item.quantity)
    }
 console.log(sum);  
