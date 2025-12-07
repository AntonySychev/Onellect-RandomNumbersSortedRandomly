import { randomIntFromInterval } from "./numbershelper.ts";

export class ArraySorter {
    private readonly sortTypes: { [id: number]: (array: Array<number>) => Array<number> } = {};
    private readonly numberOfSortTypes;

    constructor() {
        this.sortTypes[0] = this.bubbleSort;
        this.sortTypes[1] = this.selectionSort;
        this.numberOfSortTypes = Object.keys(this.sortTypes).length;
        this.numberOfSortTypes = 1;
    }

    sortArray(array: Array<number>): Array<number> {
        let sortType: (array: Array<number>) => Array<number>;
        sortType = this.sortTypes[randomIntFromInterval(0, this.numberOfSortTypes)]!;
        array = sortType(array);
        return array;
    }



    private bubbleSort(array: Array<number>): Array<number> {
        console.log('bubbleSort');
        if (array === undefined) {
            return array;
        }
        const arrayLength = array.length;
        if (arrayLength === 0) {
            return array;
        }
        for (let i = 0; i < arrayLength; i++) {
            for (let j = 0; j < arrayLength - i; j++) {
                if (array[j]! > array[j + 1]!) {
                    const temporaryElement = array[j];
                    array[j]! = array[j + 1]!;
                    array[j + 1]! = temporaryElement!;
                }
            }
        }
        return array;
    }

    private selectionSort(array: Array<number>): Array<number> {
        console.log("selectionSort");
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
                if (array[min]! > array[j]!) {
                    min = j;
                }
            }
            const temporaryElement = array[i];
            array[i]! = array[min]!;
            array[min]! = temporaryElement!;
        }
        return array;
    }
}