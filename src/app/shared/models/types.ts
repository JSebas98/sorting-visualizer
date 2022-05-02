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
}