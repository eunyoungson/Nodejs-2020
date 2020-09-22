let music = ['classic','pop','jazz','acapella','동요']

/* for (let i=0; i<4; i++) {
    console.log('<li>'+ music[i]+'</li>');
} */

//어레이의 갯수 만큼 구하는 것으로 바꿔보자!
// 어레이의 갯수는 어떻게 구하는데? music.length

console.log( music.length);

let count = music.length ;

for (let i=0; i< count; i++) {
    console.log('<li>'+ music[i]+'</li>');
}
// 어레이에 push를 사용하여 추가해보자!