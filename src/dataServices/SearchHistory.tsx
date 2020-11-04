import db from '../config/firebase';

const COLLECTION_NAME = 'searchHistory';

interface IDictonaryData {
    word: string,
    phonetics: {
      text: string,
      audio: string
    }[],
    meanings: {
      partOfSpeech: string,
      definitions: {
        definition: string, example: string
      }[],
    }[],
  }
  
  export const getSearchHistory = ()=>{
    return db.collection(COLLECTION_NAME).get();
  }
  
  export const saveSearchHistory = (word:IDictonaryData)=>{
    return db.collection(COLLECTION_NAME).add(word);
  }