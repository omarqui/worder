import { getHistory, saveWordToHistory } from "../SearchHistory";
import { IDictonaryData } from "../../types";
import getDbSpay from "../../utils/tests_utils/firebaseMock";

const expectedWord = {
    id: "",
    meanings: [],
    phonetics: [],
    word: "soy una palabra",
    date: new Date("2017-12-19")
};

describe("SearhHistory dataService", () => {

    it("should return History", async () => {
        const documentMocked = {
            ...expectedWord,
            date: { toDate: () => expectedWord.date }
        };

        const expectedHistory: Array<IDictonaryData> = [expectedWord];
        const { dbSpy, firestoreMock: firebaseMock } = getDbSpay(documentMocked)

        const result = await getHistory()
        expect(dbSpy).toHaveBeenCalledWith("searchHistory")
        expect(firebaseMock.orderBy).toHaveBeenCalled()
        expect(result).toEqual(expectedHistory)
    })

    it("should save word to history", () => {
        const { dbSpy, firestoreMock: firebaseMock } = getDbSpay()

        saveWordToHistory(expectedWord)
        expect(dbSpy).toHaveBeenCalledWith("searchHistory")
        expect(firebaseMock.add).toHaveBeenCalledWith(expectedWord)
    })
})