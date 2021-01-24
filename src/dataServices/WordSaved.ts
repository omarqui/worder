import db from '../config/firebase';
import { IDictonaryData } from "../types";

const COLLECTION_NAME = 'savedWord';

export const getSavedWords = async (): Promise<Array<IDictonaryData>> => {
  const snapshot = await db.collection(COLLECTION_NAME).get();

  const savedList = snapshot.docs.map(d => {
    const { meanings, phonetics, word, isSaved, date } = d.data();

    return <IDictonaryData>{
      id: d.id,
      meanings,
      phonetics,
      word,
      isSaved,
      date: date?.toDate()
    }

  });
  return savedList;
}

export const saveWordToFavorite = (word: IDictonaryData): Promise<any> => {
  if (word.isSaved)
    return db.collection(COLLECTION_NAME).add(word);
  else
    return db.collection(COLLECTION_NAME).doc(word.id).delete();
}