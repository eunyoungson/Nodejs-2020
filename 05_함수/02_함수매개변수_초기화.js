 function print(name, count) {
   
    console.log(`${name}이 ${count}개 있습니다`);
}
print ('사과', 10);
print('감'); //한개만 주면... 결과는 undifeined 

/* if(!count)
count = 0; */

function print(name, count) {
   /*  if(!count)
        count = 0;
    count =!count ? 0 : count; */
   // count= count ? count :0
    count = count || 0;

    console.log(`${name}이 ${count}개 있습니다`);
}
print ('사과', 10);
print('감');