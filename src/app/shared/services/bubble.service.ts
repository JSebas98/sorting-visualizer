/**
 * Class to execute bubble sorting algorithm.
 */

import { RawArray } from '../models/arrays.model';
import { Step } from '../models/types';

export class BubbleSorting{
    public arraySize: 'small' | 'medium' | 'big';
    public rawArray: RawArray;

    constructor(arraySize: 'small' | 'medium' | 'big') {
        this.arraySize = arraySize;
        this.rawArray = new RawArray(arraySize);
    }

    bubbleSortArray(rawArray: RawArray): Step[] {
        // Definitions
        let arr = rawArray.values;
        console.log('Unsorted array:', arr);
        let i: number, j:number, temp: number;
        let swapped: boolean;
        let stepsCounter:number = 0;
        let steps:Step[] = [];

        // Outer loop
        for (i = 0; i < arr.length - 1; i++) {
            swapped = false;
            // Inner loop
            for (j = 0; j < (arr.length - i) - 1; j++) {
                if (arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                    stepsCounter++;
                    //console.log(stepsCounter, arr);
                    // Keep track of each step
                    steps.push({
                        "key": stepsCounter,
                        "status":arr.slice(),
                        "pointer": j,
                        "comparedElement": j+1 
                    });
                    //console.log(steps[stepsCounter-1]);
                } else { // Record step even if no swap has been made
                    stepsCounter++;
                    steps.push({
                        "key": stepsCounter,
                        "status":arr.slice(),
                        "pointer": j,
                        "comparedElement": j+1 
                    })
                    //console.log(steps[stepsCounter-1]);
                }
            }
            // Break if no elements were swapped
            // by inner loop
            if (swapped == false) {
                break;
            }
        }

        return steps;
    }
}

// let bubble1 = new BubbleSorting('small');
// let steps = bubble1.bubbleSortArray(bubble1.rawArray);
// console.log(steps);