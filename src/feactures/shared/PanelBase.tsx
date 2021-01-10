import React from "react";
import '../../App.css';
import { IDictonaryData } from "../../types";
import { setCurrentDefinition } from "../search/actions";
import { useDispatch } from "react-redux";
interface IPanelBase {
  words: IDictonaryData[]
}

const PanelBase = ({ words }: IPanelBase) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {
          words.map((definition, position) => (
            <div
              className="panelItem"
              onClick={() => dispatch(setCurrentDefinition(definition))}>
              {position + 1}. {definition.word}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PanelBase;