/**
 * Class to execute quick sorting algorithm.
 */

 import { RawArray } from '../models/arrays.model';

 export class QuickSorting{
     public arraySize: 'small' | 'medium' | 'big';
     public rawArray: RawArray;
 
     constructor(arraySize: 'small' | 'medium' | 'big') {
         this.arraySize = arraySize;
         this.rawArray = new RawArray(arraySize);
     }
 
     sortArray(rawArray: RawArray) {
         return rawArray.values;
     }
 }
 
 let quick1 = new QuickSorting('small');
 console.log(quick1);