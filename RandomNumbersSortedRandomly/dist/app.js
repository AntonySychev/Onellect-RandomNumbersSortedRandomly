"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrayLength = randomIntFromInterval(20, 100);
let array = new Array(arrayLength);
console.log("��������� ������:");
for (let i = 0; i < arrayLength; i++) {
    array[i] = randomIntFromInterval(-100, 100);
    console.log(array[i]);
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//# sourceMappingURL=app.js.map