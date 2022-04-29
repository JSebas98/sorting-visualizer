/**
 * Class to execute merge sorting algorithm.
 */

 import { RawArray } from '../models/arrays.model';

 export class MergeSorting{
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
 
 let merge1 = new MergeSorting('small');
 console.log(merge1);