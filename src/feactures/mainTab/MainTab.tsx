import React from 'react';
import HistoryPanel from '../history/HistoryPanel';
import { IDictonaryData } from '../../types';
import SavedWordPanel from '../saveds/SavedWordPanel';
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../redux/store";
import { changeTabSelected } from "./actions";

interface IMainTab {
    setDictionaryDefinition: Function
}

export const MainTab = ({setDictionaryDefinition}:IMainTab)=>{
    const tabSelectd = useSelector((state:IRootState)=>state.mainTab.tabSelected)
    const dispatch = useDispatch();
    const setTabSelect = (newIndex:number) => dispatch(changeTabSelected(newIndex));

    return(
        <div>
            <div className="tabWrapper">
                <span 
                    className={"tabBotton h5 " + (tabSelectd == 1 ? "tabBottonSelected" : "tabBottonUnselected")}
                    onClick={()=>{setTabSelect(1)}}>
                    History
                </span>
                <span 
                    className={"tabBotton h5 " + (tabSelectd == 2 ? "tabBottonSelected" : "tabBottonUnselected")}
                    onClick={()=>{setTabSelect(2)}}>
                    Saved
                </span>
            </div>
            <div className="row">
                {tabSelectd == 1 &&
                    <div className="col-sm">
                        <HistoryPanel 
                            setDictionaryDefinition={(data:IDictonaryData)=>setDictionaryDefinition(data)} />
                    </div>
                }
                
                {tabSelectd == 2 &&
                    <div className="col-sm">
                        <SavedWordPanel 
                            setDictionaryDefinition={(data:IDictonaryData)=>setDictionaryDefinition(data)} />
                    </div>
                }
            </div>
        </div>
    )
}