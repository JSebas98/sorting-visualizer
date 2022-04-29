/**
 * Class to execute bubble sorting algorithm.
 */

 import { RawArray } from '../models/arrays.model';

 export class BubbleSorting{
     public arraySize: 'small' | 'medium' | 'big';
     public rawArray: RawArray;
 
     constructor(arraySize: 'small' | 'medium' | 'big') {
         this.arraySize = arraySize;
         this.rawArray = new RawArray(arraySize);
     }
 
     bubbleSortArray(rawArray: RawArray): number[] {
         let arr = rawArray.values;
         console.log('Unsorted array:', arr);
         let i: number, j:number, temp: number;
         let swapped: boolean;
 
         let swapCounter:number = 0;
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
                     swapCounter ++;
                     console.log(`Step #${swapCounter}: ${arr}`);
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
 
 let bubble1 = new BubbleSorting('small');
 console.log('Sorted array:', bubble1.bubbleSortArray(bubble1.rawArray));