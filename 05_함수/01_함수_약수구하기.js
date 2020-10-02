//약수...구하는 함수
function getDivisors (number) {
    let divArr=[];
    for (let k=1; k< number; k++) {
        if ( number % k === 0){
            divArr.push(k);
        }
    }
    return divArr;
}
    
    
//약수들의 합 ...을 구하는 함수
function sumDivisors(x) {
    let sum =0;
    for(let element of x){
        sum +=element;
    }
    return sum;
}

//1에서 10000까지 완전수 구하기

let perfectNumber = []; //완전수를 담을 어레이

for(let i=1; i<10000; i++){
    //완전수?
    //let sum = 약수들의 합
    let x = getDivisors(i);
    let sum = sumDivisors(x);
    if (i===sum) {
        perfectNumber.push(i);
        console.log(`${i}는 완전수, 약수는 ${x}`);        
    }  
     
}
console.log(`1에서부터 10000까지의 완전수는 ${perfectNumber}입니다.`);
//완전수란 무엇인가? PerfectNumber
//완전수는 여러개가 나올것이므로 어레이에 담자!
//완전수라는 것은 자신(i)과 약수들의 합이 같은 수이다.