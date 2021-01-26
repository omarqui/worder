import db from "../../config/firebase";
const getFirestoreMock = (docMocked: Array<any>): any => {
    const docs = docMocked.map(doc => ({
        data: () => doc,
        id: doc.id
    }))

    return {
        doc: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        get: jest.fn().mockResolvedValueOnce({ docs }),
        add: jest.fn(),
        delete: jest.fn()
    }
};

const getDbSpay = (docMock: Array<any> = []) => {
    const firestoreMock = getFirestoreMock(docMock);
    const dbSpy = jest.spyOn(db, 'collection')
        .mockImplementationOnce(() => firestoreMock)
    return {
        firestoreMock,
        dbSpy
    }
}

export default getDbSpay;