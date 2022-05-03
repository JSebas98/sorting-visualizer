/**
 * Class to execute insertion sorting algorithm.
 */

import { Injectable } from '@angular/core';
import { Step } from '../models/types';
@Injectable()
export class InsertionSorting{
    public steps: Step[];
    public stepsCounter: number;

    constructor() {
        this.steps = [];
        this.stepsCounter = 0;
    }

    insertionSortArray(arr: number[]): number[] {
        let i:number, key:number, prev:number;
        this.steps = [];
        this.stepsCounter = 0;

        for (i=1; i<arr.length; i++) {
            key = arr[i];
            prev = i - 1;
            // Moving bigger elements one place forward
            while (prev >= 0 && arr[prev] > key) {
                arr[prev + 1] = arr[prev];
                prev--;
                // Keep track of steps and array status
                this.stepsCounter++;
                this.steps.push({
                    "key": this.stepsCounter,
                    "status": arr.slice(),
                    "pointer": i,
                    "comparedElement": prev,
                    "index": -1
                });
            }
            // Insertion of element
            arr[prev+1] = key;

            // Keep track of steps and array status after insertion
            this.stepsCounter++;
            this.steps.push({
                "key": this.stepsCounter,
                "status": arr.slice(),
                "pointer": i,
                "comparedElement": prev,
                "index": -1
            })
        }

        return arr;
    }
}