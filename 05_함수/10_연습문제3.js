디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 
    초로 환산하면 총 몇 초(second) 인가?


    /* // 시간을 표현 ":" 형태로 
    //시간의 (반복)범위 time =0 time <23:59 time++ (?)
    let time = "00:00"
    //문자로 변환시키자 String함수 string() --> String(time)
        //참고> parseInt() / parseFloat 는 문자열을 수로 바꾸는 함수       
        //참고> console.log(time.split(""))
   
    String(time)  

    // 문자 중에 3이 있으면. 박스에 담아라

    if (time.indexOf(3) >=0) {

    }
    // 박스에 담긴 element 들을 초로 변환하라


    //그들의 합을 구하라.
    
    for ( time = 00 )
 */


    let total =0;
    for(let hour =0; hour <+23; hour++) {
        for(let min=0; min<60; min++) {
            let time = hour + ':' + min;
            if(time.indexOf('3')>= 0)
            total += 60;
        }
    }

    console.log(total);