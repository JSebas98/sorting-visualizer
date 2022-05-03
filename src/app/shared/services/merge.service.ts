/**
 * Class to execute merge sorting algorithm.
 */

import { Injectable } from '@angular/core';
import { Step } from '../models/types';
@Injectable()
export class MergeSorting{

    public steps: Step[];
    public stepsCounter: number;

    constructor() {
        this.steps = [];
        this.stepsCounter = 0;
    }

    /**
     * Main function that triggers the algorithm.
     * @param arr RawArray object containing shuffled array.
     * @returns sorted array.
     */
    mergeSortArray(arr: number[]): number[] {
        return this.recursiveMerge(arr, 0, arr.length-1);
    }

    recursiveMerge(arr: number[], start: number, end: number){
        if (start < end) {
            let mid: number = Math.floor((start+end) / 2);
            this.recursiveMerge(arr, start, mid);
            this.recursiveMerge(arr, mid+1, end);
            this.mergeArrays(arr, start, mid, end);
        }

        return arr;
    }

    mergeArrays(arr: number[], start: number, mid: number, end: number) {
        let temp: number[] = [];
        let start1: number = start, start2: number = mid +1;
        let end1: number = mid, end2: number = end;
        let index: number = start;

        while (start1 <= end1 && start2 <= end2) {
            if (arr[start1] <= arr[start2]) {
                temp[index] = arr[start1];
                this.steps.push({
                    "key": this.stepsCounter++,
                    "status": arr.slice(),
                    "pointer": start1,
                    "comparedElement": start2,
                    "index": -1
                });
                index++;
                start1++;
            } else if (arr[start1] > arr[start2]) {
                temp[index] = arr[start2];
                this.steps.push({
                    "key": this.stepsCounter++,
                    "status": arr.slice(),
                    "pointer": start1,
                    "comparedElement": start2,
                    "index": -1
                });
                index++;
                start2++;
            }
        }

        while (start1 <= end1) {
            temp[index] = arr[start1];
            this.steps.push({
                "key": this.stepsCounter++,
                "status": arr.slice(),
                "pointer": start1,
                "comparedElement": start1,
                "index": -1
            });
            index++;
            start1++;
        }

        while (start2 <= end2) {
            temp[index] = arr[start2];
            this.steps.push({
                "key": this.stepsCounter++,
                "status": arr.slice(),
                "pointer": start2,
                "comparedElement": start2,
                "index": -1
            });
            index++;
            start2++;
        }

        index = start;
        while (index <= end) {
            arr[index] = temp[index];
            this.steps.push({
                "key": this.stepsCounter++,
                "status": arr.slice(),
                "pointer": index,
                "comparedElement": index,
                "index": -1
            });
            index++
        }
    }
}