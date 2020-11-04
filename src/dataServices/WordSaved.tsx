import db from '../config/firebase';

const COLLECTION_NAME = 'savedWord';

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
  
  export const getSavedWords = ()=>{
    return db.collection(COLLECTION_NAME).get();
  }
  
  export const saveWord = (word:IDictonaryData)=>{
    return db.collection(COLLECTION_NAME).add(word);
  }