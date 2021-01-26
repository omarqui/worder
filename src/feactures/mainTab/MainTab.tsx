import React from 'react';
import HistoryPanel from '../history/HistoryPanel';
import SavedWordPanel from '../saveds/SavedWordPanel';
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../redux/store";
import { changeTabSelected } from "./actions";

export const MainTab = () => {
    const tabSelected = useSelector((state: IRootState) => state.mainTab.tabSelected)
    const dispatch = useDispatch();
    const setTabSelect = (newIndex: number) => dispatch(changeTabSelected(newIndex));

    return (
        <div>
            <div className="tabWrapper">
                <span
                    className={"tabBotton h5 " + (tabSelected === 1 ? "tabBottonSelected" : "tabBottonUnselected")}
                    onClick={() => { setTabSelect(1) }}>
                    History
                </span>
                <span
                    className={"tabBotton h5 " + (tabSelected === 2 ? "tabBottonSelected" : "tabBottonUnselected")}
                    onClick={() => { setTabSelect(2) }}>
                    Saved
                </span>
            </div>
            <div className="row">
                <div className="col-sm" data-testid={tabSelected}>
                    {
                        (tabSelected === 1 &&
                            <HistoryPanel />) ||
                        (tabSelected === 2 &&
                            <SavedWordPanel />)
                    }
                </div>
            </div>
        </div>
    )
}