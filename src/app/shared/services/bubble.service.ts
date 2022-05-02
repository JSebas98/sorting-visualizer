/**
 * Class to execute bubble sorting algorithm.
 */

import { Step } from '../models/types';

export class BubbleSorting{
    public steps: Step[];
    public stepsCounter: number;

    constructor() {
        this.steps = [];
        this.stepsCounter = 0;
    }

    bubbleSortArray(arr: number[]): number[] {
        // Definitions
        let i: number, j:number, temp: number;
        let swapped: boolean;

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
                    this.stepsCounter++;
                    //console.log(stepsCounter, arr);
                    // Keep track of each step
                    this.steps.push({
                        "key": this.stepsCounter,
                        "status":arr.slice(),
                        "pointer": j,
                        "comparedElement": j+1 
                    });
                    //console.log(steps[stepsCounter-1]);
                } else { // Record step even if no swap has been made
                    this.stepsCounter++;
                    this.steps.push({
                        "key": this.stepsCounter,
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

        return arr;
    }
}