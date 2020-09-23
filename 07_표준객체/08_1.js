let products = [
    {name : '바나나' , price: 1200 },
    {name : '사과' , price: 2000 },
    {name : '배' , price: 3000 },
    {name : '고구마' , price: 700 },
    {name : '감자' , price: 600 },
    {name : '수박' , price: 5000 },
] ;

let html = `<table>
    <tr>
        <th>품목</th>
        <th>가격</th>
    </tr>
    `; 

console.log(html);

for (let product of products) {
    console.log(
    `<tr>
        <td> ${product.name} </td>
        <td> ${product.price}</td>
    </tr>
    `
    );
}

console.log('</table>');

