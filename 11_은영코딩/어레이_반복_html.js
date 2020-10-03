let musics = ['classic','pop','jazz','acapella','동요']

/* for (let i=0; i<4; i++) {
    console.log('<li>'+ music[i]+'</li>');
} */

//어레이의 갯수 만큼 구하는 것으로 바꿔보자!
// 어레이의 갯수는 어떻게 구하는데? music.length

console.log( musics.length);

let count = musics.length ;

for (let i=0; i< count; i++) {
    console.log('<li>'+ musics[i]+'</li>');
}
// 어레이에 push를 사용하여 추가해보자!
musics.push('민요') 
console.log(musics);

let musiclist = '';
musiclist +='<ul>\n'
for ( let music of musics) {
    musiclist +='\t<li>'+music+'</li>\n'
}
musiclist +='</ul>'

console.log(musiclist);

// 반복문을 이용한 html 리스트 만들기

 let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// 1번 방법
let html = '';
html += '<ul>\n'
for(let i=0; i<fruits.length; i++) {
    html += '\t<li>'+fruits[i]+ '</li>\n'
}  
 html += '</ul>';

 console.log(html); 

 //2번방법
 let list = '';
 list += '<ul>\n'
 for(let fruit of fruits) {
     list += '\t<li>'+fruit+ '</li>\n'
 }  
  list += '</ul>';
 
  console.log(list); 