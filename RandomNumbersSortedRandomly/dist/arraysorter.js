import { randomIntFromInterval } from "./numbershelper";
export class ArraySorter {
    sortTypes = {};
    numberOfSortTypes;
    constructor() {
        this.sortTypes[0] = this.bubbleSort;
        this.sortTypes[1] = this.selectionSort;
        this.numberOfSortTypes = Object.keys(this.sortTypes).length;
    }
    sortArray(array) {
        let sortType;
        sortType = this.sortTypes[randomIntFromInterval(0, this.numberOfSortTypes)] ?? this.bubbleSort;
        array = sortType(array);
        return array;
    }
    bubbleSort(array) {
        if (array === undefined) {
            return array;
        }
        const arrayLength = array.length;
        if (arrayLength === 0) {
            return array;
        }
        for (let i = 0; i < arrayLength; i++) {
            for (let j = 0; j < arrayLength - i; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return array;
    }
    selectionSort(array) {
        if (array === undefined) {
            return array;
        }
        const arrayLength = array.length;
        if (arrayLength === 0) {
            return array;
        }
        for (let i = 0; i < arrayLength; i++) {
            let min = i;
            for (let j = i + 1; j < arrayLength; j++) {
                if (array[min] > array[j]) {
                    min = j;
                }
            }
            [array[i], array[min]] = [array[min], array[i]];
        }
        return array;
    }
}
//# sourceMappingURL=arraysorter.js.map