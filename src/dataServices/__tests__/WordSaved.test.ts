import { getSavedWords, saveWordToFavorite } from "../WordSaved";
import firebaseMocker from "../../utils/tests_utils/firebaseMock";
import { IDictonaryData } from "../../types";

describe("Word saved data service", () => {
    const expectedWord = {
        id: "",
        meanings: [],
        phonetics: [],
        word: "soy una palabra",
        date: new Date("2017-12-19")
    };

    it("should return saved words when sucessfull", async () => {
        const documentMocked = {
            ...expectedWord,
            date: { toDate: () => expectedWord.date }
        };

        const expectedSavedWords: Array<IDictonaryData> = [{
            ...expectedWord,
            isSaved: true
        }];

        const { dbSpy, firestoreMock } = firebaseMocker(documentMocked);
        const result = await getSavedWords()
        expect(dbSpy).toHaveBeenCalledWith("savedWord")
        expect(firestoreMock.get).toHaveBeenCalled()
        expect(result).toEqual(expectedSavedWords)
    })

    describe("toogle saved word", () => {
        it("save word when isSaved is undefine", () => {
            const { dbSpy, firestoreMock } = firebaseMocker();
            saveWordToFavorite(expectedWord)
            expect(dbSpy).toHaveBeenCalledWith("savedWord")
            expect(firestoreMock.add).toHaveBeenCalledWith(expectedWord)
        })

        it("save word when isSaved is false", () => {
            const { dbSpy, firestoreMock } = firebaseMocker();
            saveWordToFavorite({
                ...expectedWord,
                isSaved: false
            })
            expect(dbSpy).toHaveBeenCalledWith("savedWord")
            expect(firestoreMock.add).toHaveBeenCalledWith(expectedWord)
        })

        it("delete word when isSaved is true", () => {
            const { dbSpy, firestoreMock } = firebaseMocker();
            saveWordToFavorite({
                ...expectedWord,
                isSaved: true
            })
            expect(dbSpy).toHaveBeenCalledWith("savedWord")
            expect(firestoreMock.doc).toHaveBeenCalledWith(expectedWord.id)
            expect(firestoreMock.delete).toHaveBeenCalled()
        })
    })

})