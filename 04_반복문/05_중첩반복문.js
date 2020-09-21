//별 피라미드 만들기



for( let i=0; i<5; i++){
    let stars ="";
    for (let k=0; k< i+1; k++){

        stars +="*";
    }
    console.log(stars);
}

// 공간과 별 만들기

for (let i=0; i<5; i++){
    let stars ="";
    for (let k=0; k<5-i-1; k++) {
        stars +=" ";
    }
    for (let k=0; k< i+1; k++){

        stars +="*";
    }
    console.log(stars);
}

for (let i=5; i>0; i--){
    let stars ="";
    for (let k=0; k<5-i; k++) {
        stars +=" "; //star + " " =
    }
    for (let k=0; k< i; k++){

        stars +="*";
    }
    console.log(stars);
}

for (let i=5; i>0; i--){
    let stars ="";
    
    for (let k=0; k< i; k++){

        stars +="*";
    }
    console.log(stars);
}
console.log();

for (let i=0; i<5; i++) {
    let stars = "";
    for (let k=0; k<5-i-1; k++) {
        stars +=" ";
    }
    for (let k=0; k<2*i; k++) {
        stars += "*";
    }
    console.log(stars);
}

for (let i=4; i>0; i--) {
    let stars = "";
    for (let k=0; k<5-i; k++) {
        stars +=" ";
    }
    for (let k=0; k<2*i-1; k++) {
    stars +="*";
    }
}