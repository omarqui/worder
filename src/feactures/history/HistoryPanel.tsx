import React, { useEffect } from "react";
import '../../App.css';
import PanelBase from "../shared/PanelBase";
import { fetchHistory } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

const HistoryPanel = ()=>{
    const dispatch = useDispatch();
    const history = useSelector((state:IRootState)=>state.history.logs)
    
    useEffect(()=>{
      dispatch(fetchHistory());
    },[])

    return (
        <PanelBase
          words={history} />
    );
}

export default HistoryPanel;