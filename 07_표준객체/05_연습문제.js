let products = [
    {name : '바나나' , price: 1200 },
    {name : '사과' , price: 2000 },
    {name : '배' , price: 3000 },
    {name : '고구마' , price: 700 },
    {name : '감자' , price: 600 },
    {name : '수박' , price: 5000 },
] ;

/* 
 for (let key in products) {
    console.log('<tr><th>' + + '</th><br><th>' + +'</th></tr>')
 }

 for (let product of products) {
    console.log('<tr><td>'+ product.name + '</td><br><td>'+ product.price +'</td></tr>');
}   */


 let html = `<table>
    <tr>
        <th>품목</th>
        <th>가격</th>
    </tr>
    `; 

for (let product of products) {
    html +=
    `<tr>
        <td> ${product.name} </td>
        <td> ${product.price}</td>
    </tr>
    `
    
}

html += '</table>'

console.log(html); 

/* let head = `<table>
    <tr>
        <th>품목</th>
        <th>가격</th>
    </tr>  `;

let mid;
for (let product of products) {
    
    `<tr>
        <td> ${product.name} </td>
        <td> ${product.price}</td>
    </tr>
    `
}

 end += '</table>'
console.log('head' + 'mid' + 'end')
 */