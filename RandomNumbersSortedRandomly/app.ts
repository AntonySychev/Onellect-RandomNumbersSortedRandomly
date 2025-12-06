import { randomIntFromInterval } from "./numbershelper.ts";
import { ArraySorter } from "./arraysorter.ts"

const arrayLength = randomIntFromInterval(20, 100);
let array = new Array<number>(arrayLength);
console.log("Random array:");
for (let i = 0; i < arrayLength; i++) {
    array[i] = randomIntFromInterval(-100, 100);
    console.log(array[i]);
}
console.log("Sorted array:");
array = new ArraySorter().sortArray(array);
console.log(array);
