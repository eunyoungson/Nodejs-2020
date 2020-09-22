/* a + b + c = 1000 인 피타고라스 수를 구하시오.
    즉, a*a + b*b = c*c 을 만족하고
    a < b < c 이고, a + b > c 이다.
 */
​

let a,b,c ;

for(a=1; a<1000; a++) {
    for(b=a+1; b< 1000; b++){
        for(c=b+1; c<1000; c++) {
            if (a*a +b*b === c*c && a+b+c ===1000){
                console.log(a,b,c)
            }
        }
    }
}



//a*a +b*b === c*c && a<b<c && a+b > c