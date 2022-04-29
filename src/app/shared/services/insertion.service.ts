/**
 * Class to execute insertion sorting algorithm.
 */

 import { RawArray } from '../models/arrays.model';

 export class InsertionSorting{
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
 
 let insertion1 = new InsertionSorting('small');
 console.log(insertion1);