/**
 * Model for generating arrays.
 */

export class RawArray {
    size: 'small' | 'medium' | 'big';
    values: number[];

    constructor(size: 'small' | 'medium' | 'big') {
        this.size = size;
        this.values = this.generateArray(size);
    }

    /**
     * Generates an array of the given size.
     * @param arraySize number; the size of the array.
     * @returns an array with numbers 1 to given size.
     */
    generateArray(arraySize: 'small' | 'medium' | 'big'): number[] {
        let myArray: number[] = [];
        let sizeNumerical: number = 0;
        
        switch(arraySize){
            case 'small':
                sizeNumerical = 10;
                break;
            case 'medium':
                sizeNumerical = 50;
                break;
            case 'big':
                sizeNumerical = 100;
                break;
            default:
                console.log('Unsupported size!');
        }

        for (let i=1; i<sizeNumerical+1; i++) {
            myArray.push(i);
        }

        return this.shuffleArray(myArray);
    }

    /**
     * Shuffles an ordered array.
     * @param rawArray the array to be shuffled.
     * @returns the shuffled array.
     */
    shuffleArray(rawArray: number[]): number[] {
        for (let i= rawArray.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * rawArray.length);
            [rawArray[i], rawArray[j]] = [rawArray[j], rawArray[i]];
        }

        return rawArray;
    }
}