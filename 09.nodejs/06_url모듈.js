const url = require('url');

let urlSample = 'https://www.hanbit.co.kr/store/books/look.php?p_code=B4872223435';
let parseObject = url.parse(urlSample);
console.log(parseObject);
console.log(parseObject.query);

//결과 p_code=B4872223435 --> 앞에 p 는 get방식으로 가져온걸 의미.

console.log(url.format(parseObject));
