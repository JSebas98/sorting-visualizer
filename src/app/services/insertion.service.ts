/**
 * Class to execute insertion sorting algorithm.
 */

import { RawArray } from '../models/arrays.model';
import { Step } from '../models/types';

export class InsertionSorting{
    public arraySize: 'small' | 'medium' | 'big';
    public rawArray: RawArray;

    constructor(arraySize: 'small' | 'medium' | 'big') {
        this.arraySize = arraySize;
        this.rawArray = new RawArray(arraySize);
    }

    insertionSortArray(rawArray: RawArray): Step[] {
        let arr = rawArray.values;
        console.log('Unsorted array:', arr);
        let i:number, key:number, prev:number;
        let stepsCounter: number = 0;
        let steps: Step[] = [];

        for (i=1; i<arr.length; i++) {
            key = arr[i];
            prev = i - 1;
            // Moving bigger elements one place forward
            while (prev >= 0 && arr[prev] > key) {
                arr[prev + 1] = arr[prev];
                prev--;
                // Keep track of steps and array status
                stepsCounter++;
                steps.push({
                    "key": stepsCounter,
                    "status": arr.slice(),
                    "pointer": i,
                    "comparedElement": prev
                });
            }
            // Insertion of element
            arr[prev+1] = key;

            // Keep track of steps and array status after insertion
            stepsCounter++;
            steps.push({
                "key": stepsCounter,
                "status": arr.slice(),
                "pointer": i,
                "comparedElement": prev
            })
        }

        return steps;
    }
}

let insertion1 = new InsertionSorting('small');
console.log('Sorted array:', insertion1.insertionSortArray(insertion1.rawArray));