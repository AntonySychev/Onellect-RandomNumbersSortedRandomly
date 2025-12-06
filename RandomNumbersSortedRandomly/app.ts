const arrayLength = randomIntFromInterval(20, 100);
let array = new Array<number>(arrayLength);
console.log("Случайный массив:");
for (let i = 0; i < arrayLength; i++) {
    array[i] = randomIntFromInterval(-100, 100);
    console.log(array[i]);
}






function randomIntFromInterval(min: number, max: number): number { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}