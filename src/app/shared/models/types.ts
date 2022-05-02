export type ArraySize = 'small' | 'medium' | 'big';
// Type template for object containing required
// info for rendering algorithm steps (Bubble and Insertion)
export type Step = {
    "key": number,
    "status": number[],
    "pointer": number,
    "comparedElement": number
};

export type QuickStep = {
    "key": number,
    "status": number[],
    "pivot": number,
    "comparedElement": number,
    "swapIndex": number,
    "swapped": boolean
};

export type MergeStep = {
    "key": number,
    "leftArray": number[],
    "rightArray": number[],
    "sortedArray": number[],
    "pointer": number,
    "comparedElement": number
};