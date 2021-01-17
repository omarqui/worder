import { promises } from 'fs';
import db from '../config/firebase';
import { IDictonaryData } from "../types";

const COLLECTION_NAME = 'savedWord';

export const getSavedWords = ()=>{
  return db.collection(COLLECTION_NAME).get();
}

export const saveWordToFavorite = (word:IDictonaryData):Promise<any> =>{
  if (word.isSaved)
    return db.collection(COLLECTION_NAME).add(word);
  else
    return db.collection(COLLECTION_NAME).doc(word.id).delete();
}