/**
 * Class to execute quick sorting algorithm.
 */

import { RawArray } from '../models/arrays.model';
import { QuickStep } from '../models/types';

export class QuickSorting {
    public arraySize: 'small' | 'medium' | 'big';
    public rawArray: number[];
    public steps: QuickStep[];
    public stepsCounter: number;

    constructor(arraySize: 'small' | 'medium' | 'big') {
        this.arraySize = arraySize;
        this.rawArray = new RawArray(arraySize).generateArray(arraySize);
        this.steps = [];
        this.stepsCounter = 0;
    }

    /**
     * Main function that executes quick sort alforithm.
     * @param arr shuffled array.
     * @param start first index sub-array
     * @param end last index sub-array
     * @returns sorted array.
     */
    quickSortArray(arr: number[], start: number = 0, end: number = arr.length-1): number[] {
        
        if (start < end) {
            let pivot: number = this.findPivot(arr, start, end);

            this.quickSortArray(arr, start, pivot-1); // before pivot
            this.quickSortArray(arr, pivot+1, end); // after pivot
        }

        return arr;
    }

    /**
     * Finds the index of the pivot.
     * @param arr shuffled array.
     * @param start first index of array.
     * @param end last index of array (intial position of pivot).
     * @returns the position where the pivot is on the array.
     */
    findPivot(arr: number[], start: number, end: number): number {
        //
        let pivot: number = arr[end];
        let swapIndex: number = start-1;

        for (let i:number = start; i <= end-1; i++) {
            // If current element is smaller than pivot.
            if (arr[i] < pivot) {
                swapIndex++; // Increment swapIndex
                // Keep track of steps
                this.stepsCounter++;
                this.steps.push({
                    "key": this.stepsCounter,
                    "status": arr.slice(),
                    "pivot": end,
                    "comparedElement": i,
                    "swapIndex": swapIndex,
                    "swapped": true
                });
                // Swap current element and element at swapIndex
                [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
                
            } else {
                // Keep track of steps
                this.stepsCounter++;
                this.steps.push({
                    "key": this.stepsCounter,
                    "status": arr.slice(),
                    "pivot": end,
                    "comparedElement": i,
                    "swapIndex": swapIndex,
                    "swapped": false
                });
            }
        }
        // Place pivot at the right position
        [arr[end], arr[swapIndex+1]] = [arr[swapIndex+1], arr[end]];
        // Keep track of steps
        this.stepsCounter++;
        this.steps.push({
            "key": this.stepsCounter,
            "status": arr.slice(),
            "pivot": end,
            "comparedElement": swapIndex+1,
            "swapIndex": swapIndex,
            "swapped": true
        });

        // Pivot new index.
        return swapIndex+1;
    }
    
}

let quick1 = new QuickSorting('small');
console.log('Unsorted array', quick1.rawArray);
console.log('Sorted array:', quick1.quickSortArray(quick1.rawArray));
console.log(quick1.steps);
