import { IDictonaryData } from "../types";
import { makeUrlSearchWord } from "../utils/makeUrls";
export async function makeSearch(word: string): Promise<IDictonaryData> {
    const res = await fetch(makeUrlSearchWord(word));
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
