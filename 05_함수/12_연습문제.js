
 let counts = [0,0,0,0,0,0,0,0,0,0] ;
 //1의 자리수
 for ( let i=1; i<=9; i++) {
     counts[i++];
 }
 
 //두자리수
 for ( let i=10; i<=99; i++) {
    counts[parseInt(i/10)]++; //십의 자리수 구하기
    counts[i %10]++ ;   //일의 자리수
}

//세자리수 
for ( let i=100; i<=999; i++) {
    counts[parseInt(i/100)]++; //백의 자리수 구하기
    counts[parseInt((i%100)/10)]++ ;      //십의 자리수
    counts[i %10]++ ;   //일의 자리수
}
//네자리수
for ( let i=1000; i<=1000; i++) {
    counts[parseInt(i/1000)]++; //천의 자리수 구하기
    counts[parseInt((i%1000)/100)]++ ;      //백의 자리수
    counts[parseInt((i%100)/10)]++ ; //십의자리수
    counts[i %10]++ ;   //일의 자리수 
}
console.log(counts);
console.log