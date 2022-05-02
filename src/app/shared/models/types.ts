export type ArraySize = 'small' | 'medium' | 'big';

export type Step = {
    "key": number,
    "status": number[],
    "pointer": number,
    "comparedElement": number
};

export type MergeStep = {
    "key": number,
    "leftArray": number[],
    "rightArray": number[],
    "sortedArray": number[],
    "pointer": number,
    "comparedElement": number
}