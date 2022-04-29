/**
 * Class to execute insertion sorting algorithm.
 */

import { RawArray } from '../models/arrays.model';

export class InsertionSorting{
    public arraySize: 'small' | 'medium' | 'big';
    public rawArray: RawArray;

    constructor(arraySize: 'small' | 'medium' | 'big') {
        this.arraySize = arraySize;
        this.rawArray = new RawArray(arraySize);
    }

    insertionSortArray(rawArray: RawArray): number[] {
        let arr = rawArray.values;
        console.log('Unsorted array:', arr);

        let i:number, j:number;

        for (i = 0; i < arr.length; i++){

            for (j = i+1; j > 0; j--) {
                if (arr[j] < arr[i]) {
                    
                }
            }
        }

        return arr;
    }
}

let insertion1 = new InsertionSorting('small');
console.log('Sorted array:', insertion1.insertionSortArray(insertion1.rawArray));