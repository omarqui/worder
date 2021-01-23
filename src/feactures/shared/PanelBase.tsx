import React from "react";
import '../../App.css';
import { IDictonaryData } from "../../types";
import { setCurrentDefinition } from "../search/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
interface IPanelBase {
  words: IDictonaryData[]
}

const PanelBase = ({ words }: IPanelBase) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        words.map((definition, position) => (
          <div
            className="panelItem"
            onClick={() => dispatch(setCurrentDefinition(definition))}
            key={position}>
            {position + 1}. {definition.word}
            <div>
              {moment(definition.date).format("YYYY-MM-DD hh:mm A")}
            </div>
          </div>
        ))}
    </div>
  );
}

export default PanelBase;