export interface IDictonaryData {
    id?: string,
    word: string,
    phonetics: {
        text: string,
        audio: string
    }[],
    meanings: IMeaning[],
    isSaved?: boolean
}

export interface IMeaning {
    partOfSpeech: string,
    definitions: { 
        definition: string, example: string
    }[],
}