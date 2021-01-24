import db from "../../config/firebase";
const getFirestoreMock = (docMocked:any):any => ({
    doc: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    get: jest.fn().mockResolvedValueOnce({ docs: [{ data: () => docMocked, id: docMocked.id }] }),
    add: jest.fn(),
    delete: jest.fn()
});

const getDbSpay = (docMock:any={}) => {
    const firestoreMock = getFirestoreMock(docMock);
    const dbSpy = jest.spyOn(db, 'collection')
                      .mockImplementationOnce(() => firestoreMock)
    return {
        firestoreMock,
        dbSpy
    }
}

export default getDbSpay;