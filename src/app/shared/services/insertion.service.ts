/**
 * Class to execute insertion sorting algorithm.
 */

import { RawArray } from '../models/arrays.model';
import { Step } from '../models/types';

export class InsertionSorting{
    public arraySize: 'small' | 'medium' | 'big';
    public rawArray: number[];
    public steps: Step[];
    public stepsCounter: number;

    constructor(arraySize: 'small' | 'medium' | 'big') {
        this.arraySize = arraySize;
        this.rawArray = new RawArray(arraySize).generateArray(arraySize);
        this.steps = [];
        this.stepsCounter = 0;
    }

    insertionSortArray(arr: number[] = this.rawArray): number[] {
        let i:number, key:number, prev:number;

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
                    "comparedElement": prev
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
                "comparedElement": prev
            })
        }

        return arr;
    }
}