import { IDictonaryData } from "../types";

export async function makeSearch(word: string): Promise<IDictonaryData> {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data: IDictonaryData[] = await res.json();
    
    if (data?.length == 0)
        return {
            meanings: [],
            phonetics: [],
            word: "",
        };

    const dictionaryData: IDictonaryData = data[0];
    dictionaryData.date = new Date();

    return dictionaryData;
}
