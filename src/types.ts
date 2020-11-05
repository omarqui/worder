export interface IDictonaryData {
    word: string,
    phonetics: {
        text: string,
        audio: string
    }[],
    meanings: IMeaning[],
}

export interface IMeaning {
    partOfSpeech: string,
    definitions: { 
        definition: string, example: string
    }[],
}