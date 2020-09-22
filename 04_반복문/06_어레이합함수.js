function sumArray(arr) {
    let sum=0;
    for (let element of arr)
    sum += element;

    return sum;
}

let sample = [1, 3, 5,6,8];
console.log(sumArray(sample));