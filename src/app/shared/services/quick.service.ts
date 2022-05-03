/**
 * Class to execute quick sorting algorithm.
 */

import { Injectable } from '@angular/core';
import { QuickStep } from '../models/types';
@Injectable()
export class QuickSorting {
    public steps: QuickStep[];
    public stepsCounter: number;

    constructor() {
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
                // Swap current element and element at swapIndex
                [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
                this.steps.push({
                    "key": this.stepsCounter,
                    "status": arr.slice(),
                    "index": end,
                    "comparedElement": i,
                    "pointer": swapIndex
                });
            } else {
                // Keep track of steps
                this.stepsCounter++;
                this.steps.push({
                    "key": this.stepsCounter,
                    "status": arr.slice(),
                    "index": end,
                    "comparedElement": i,
                    "pointer": swapIndex
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
            "index":  end,
            "comparedElement": end,
            "pointer": swapIndex
        });
        // Pivot new index.
        return swapIndex+1;
    }
    
}
