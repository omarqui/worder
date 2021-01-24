import { makeSearch } from "../SearchWord";
import fetchMock from "fetch-mock";
import { makeUrlSearchWord } from "../../utils/makeUrls";

const expectedWord = {
    meanings: [],
    phonetics: [],
    word: "soy una palabra",
};

describe("SearchWord dataService", () => {
    it("should return word object when sucessfull", async () => {
        fetchMock.get(makeUrlSearchWord(expectedWord.word), [expectedWord])
        const result = await makeSearch(expectedWord.word);
        expect({ ...result, date: undefined }).toEqual(expectedWord)
    })

    it("should return empty object when no found searched word", async () => {
        const word = "hola"
        fetchMock.get(makeUrlSearchWord(word), [])
        const result = await makeSearch(word);
        expect(result).toEqual({
            meanings: [],
            phonetics: [],
            word: "",
        })
    })
})