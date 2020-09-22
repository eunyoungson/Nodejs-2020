for (let i=2; i<10000; i++) {
    let divArray=[] ;
    for (let k=1; k<i; k++) {
        if (i%k === 0) {
            divArray.push(k);
        }   
    }
    let sum=0;
    for (let divisor of divArray)
    sum += divisor;

    if(i ===sum) {
        console.log(i);
        console.log(divArray);
    }
}
//k=divisor

/* while (i%k === 0 ) {
    let sum = 0 ;
    sum += k;
    k++
    if (sum = i) {
        console.log(i)
    }           
} */

//함수를 사용해서 구해보자!
//약수 구하는 함수 
function getDivisors(sum) {
    let divArray=[] ;
    for (let k=1; k<i; k++) {
        if (i%k === 0) {
            divArray.push(k);
    return divArray;
}


//Array 원소의 합을 계산해 주는 함수
function sumArray(arr) {
    let sum=0;
    for (let element of arr)
    sum += element;

    return sum;
}

//n.2
for (let i=2; i<10000; i++) {
    let array = getDivisors(i);
    let divSum = sumArray(array);

    if (i=== divSum) {
        console.log(i, '\n', array);
    }
}