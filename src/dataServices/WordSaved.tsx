import db from '../config/firebase';
import { IDictonaryData } from "../types";

const COLLECTION_NAME = 'savedWord';

export const getSavedWords = ()=>{
  return db.collection(COLLECTION_NAME).get();
}

export const saveWord = (word:IDictonaryData)=>{
  return db.collection(COLLECTION_NAME).add(word);
}