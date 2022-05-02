/**
 * Class to execute merge sorting algorithm.
 */

import { RawArray } from '../models/arrays.model';
import { MergeStep } from '../models/types';

export class MergeSorting{
    public arraySize: 'small' | 'medium' | 'big';
    public rawArray: number[];
    public steps: MergeStep[];
    public stepsCounter: number;

    constructor(arraySize: 'small' | 'medium' | 'big') {
        this.arraySize = arraySize;
        this.rawArray = new RawArray(arraySize).generateArray(arraySize);
        this.steps = [];
        this.stepsCounter = 0;
    }

    /**
     * Main function that triggers the algorithm.
     * @param rawArray RawArray object containing shuffled array.
     * @returns sorted array.
     */
    mergeSortArray(arr: number[]): number[] {
        console.log('Unsorted array:', arr);
        let sortedArray: number[] = this.divideArrays(arr);
        
        return sortedArray;
    }

    /**
     * Function that divides arrays recursively and calls
     * mergeArrays to sort the original array.
     * @param arr shuffled array.
     * @returns sorted array.
     */
    divideArrays(arr: number[]): number[]{
        if (arr.length == 1){
            return arr;
        }
        let arr1: number[] = arr.slice(0, arr.length/2);
        let arr2: number[] = arr.slice(arr.length/2, arr.length);
        
        this.steps.push({
            "key": this.stepsCounter++,
            "leftArray": arr1.slice(),
            "rightArray": arr2.slice(),
            "sortedArray": arr.slice(),
            "pointer": -1,
            "comparedElement": -1
        });

        arr1 = this.divideArrays(arr1);
        arr2 = this.divideArrays(arr2);

        return this.mergeArrays(arr1, arr2);
    }

    /**
     * Function that takes care of merging divided arrays
     * in an ordered way.
     * @param arr1 left side of divided array.
     * @param arr2 right side of divided array.
     * @returns sorted array.
     */
    mergeArrays(arr1: number[], arr2: number[]): number[] {
        let sortedArray: number[] = [];
        
        while (arr1.length > 0 && arr2.length > 0) {
            if (arr1[0] > arr2[0]) {
                sortedArray.push(arr2[0]);
                
                // Keep track of step.
                this.stepsCounter++;
                this.steps.push({
                    "key": this.stepsCounter,
                    "leftArray": arr1.slice(),
                    "rightArray": arr2.slice(),
                    "sortedArray": sortedArray.slice(),
                    "pointer": 0,
                    "comparedElement": 0
                });

                arr2.splice(0, 1);

            } else {
                sortedArray.push(arr1[0]);

                // Keep track of step.
                this.stepsCounter++;
                this.steps.push({
                    "key": this.stepsCounter,
                    "leftArray": arr1.slice(),
                    "rightArray": arr2.slice(),
                    "sortedArray": sortedArray.slice(),
                    "pointer": 0,
                    "comparedElement": 0
                });

                arr1.splice(0, 1);
            }
        }

        // At this point, either arr1 or arr2 is empty

        while (arr1.length > 0){
            sortedArray.push(arr1[0]);

            // Keep track of step.
            // "comparedElement": -1 because there is no comparison
            // just removal from arr1 and addition to sortedArray
            this.stepsCounter++;
            this.steps.push({
                "key": this.stepsCounter,
                "leftArray": arr1.slice(),
                "rightArray": arr2.slice(),
                "sortedArray": sortedArray.slice(),
                "pointer": 0,
                "comparedElement": -1
            });

            arr1.splice(0, 1);
        }

        while (arr2.length > 0){
            sortedArray.push(arr2[0]);

            // Keep track of step.
            // "comparedElement": -1 because there is no comparison
            // just removal from arr2 and addition to sortedArray
            this.stepsCounter++;
            this.steps.push({
                "key": this.stepsCounter,
                "leftArray": arr1.slice(),
                "rightArray": arr2.slice(),
                "sortedArray": sortedArray.slice(),
                "pointer": 0,
                "comparedElement": -1
            });

            arr2.splice(0, 1);
        }
        
        return sortedArray;
    }
}