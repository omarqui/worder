import db from '../config/firebase';
import { IDictonaryData } from "../types";

const COLLECTION_NAME = 'searchHistory';

export const getHistory = async (): Promise<Array<IDictonaryData>> => {
  const data = await db.collection(COLLECTION_NAME).orderBy("date", "desc").get();
  const logs = data.docs.map(d => {
    const { meanings, phonetics, word, date } = d.data();

    return {
      id: d.id,
      meanings,
      phonetics,
      word,
      date: date.toDate()
    }
  });

  return logs;
}

export const saveWordToHistory = (word: IDictonaryData) => {
  return db.collection(COLLECTION_NAME).add(word);
}