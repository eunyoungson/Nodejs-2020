/* 양의 정수 N을 입력으로 받아 1부터 N까지 제곱의 합과
    합의 제곱을 구하시오. */

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('정수 입력>');
rl.prompt();
   
rl.on('line', function(buf) {
    //입력을 받아서 처리하는 로직

    //number ? 정의해주고,
let k ;
    let number = parseInt(buf);
    //제곱의 합
    for( k=1; k <= number; k++){
        let power = Math.pow(k,2);
    }

    function sumArray(array) {
        let sum=0;
        for (let  element of array)
            sum += element;
    }
       // return sum;

    //pow.Sum += pow
    
    //합의 제곱
   for( k=1; k <= number; k++ ) {
        let sum1 =0;
        sum1 += k;
    }
        
    sum2 = k*k ;

    if (k=number) {
    console.log(sumArray(power), sum2) ;
    }

    rl.close();
}); 