import React, { useEffect } from "react";
import '../../App.css';
import PanelBase from "../shared/PanelBase";
import { fetchSaved } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

const SavedWordPanel = ()=>{
    const saved = useSelector((state:IRootState)=>state.saved.savedList);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchSaved());
    },[])

    return (
        <PanelBase words={saved} />
    );
}

export default SavedWordPanel;