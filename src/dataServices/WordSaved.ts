import db from '../config/firebase';
import { IDictonaryData } from "../types";

const COLLECTION_NAME = 'savedWord';

export const getSavedWords = async (): Promise<Array<IDictonaryData>> => {
  const snapshot = await db.collection(COLLECTION_NAME).get();

  const savedList = snapshot.docs.map(d => {
    const { meanings, phonetics, word, date } = d.data();

    return <IDictonaryData>{
      id: d.id,
      meanings,
      phonetics,
      word,
      isSaved: true,
      date: date?.toDate()
    }

  });
  console.log(savedList);
  
  return savedList;
}

export const saveWordToFavorite = async (word: IDictonaryData): Promise<any> => {
  console.log(word);
  
  if (word?.isSaved || false)
    await db.collection(COLLECTION_NAME).doc(word.id).delete();
  else {
    const newWord = { ...word }
    delete newWord.isSaved
    await db.collection(COLLECTION_NAME).add(newWord);
  }

  return !(word?.isSaved)
}