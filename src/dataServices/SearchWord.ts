import { IDictonaryData } from "../types";

export async function makeSearch(word: string): Promise<IDictonaryData> {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data: IDictonaryData[] = await res.json();

    const dictionaryData: IDictonaryData = data.length > 0 ? data[0] : {
        meanings: [],
        phonetics: [],
        word: "",
    };

    return dictionaryData;
}
