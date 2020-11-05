import db from '../config/firebase';
import { IDictonaryData } from "../types";

const COLLECTION_NAME = 'searchHistory';
  
export const getSearchHistory = ()=>{
  return db.collection(COLLECTION_NAME).get();
}

export const saveSearchHistory = (word:IDictonaryData)=>{
  return db.collection(COLLECTION_NAME).add(word);
}