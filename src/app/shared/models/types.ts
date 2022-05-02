export type ArraySize = 'small' | 'medium' | 'big';
// Type template for object containing required
// info for rendering algorithm steps (Bubble and Insertion)
export type Step = {
    "key": number,
    "status": number[],
    "pointer": number,
    "comparedElement": number
};
