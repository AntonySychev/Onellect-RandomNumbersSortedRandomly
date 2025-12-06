import { randomIntFromInterval } from "./numbershelper";
const arrayLength = randomIntFromInterval(20, 100);
let array = new Array(arrayLength);
console.log("Random array:");
for (let i = 0; i < arrayLength; i++) {
    array[i] = randomIntFromInterval(-100, 100);
    console.log(array[i]);
}
//# sourceMappingURL=app.js.map