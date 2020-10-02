function dog( name, age) {
        
    if (age === 6 && 9) {
        console.log(`${name}은/는 ${age}살입니다. 건강검진이 필요합니다!`);
    }
    else if (!age) {
        console.log(`${name}의 나이를 알수없습니다\n` +'==>알아보세요!');   
    } else {
        console.log(`${name}의 나이는 ${age}입니다`);
    }
}
dog ('요미' , 5);
dog('별이',6);
dog('코코');
dog('복실',1);
dog('린짱',9);

//오브젝트배열을 써서 만들어보자~!