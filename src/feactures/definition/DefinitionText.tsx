import React from 'react';
import "../../App.css";

type definitionTextProps = {
    value: string
}

export const DefinitionText = ({value}: definitionTextProps)=> {
   return (
        <div>
            <span>{value}</span>
        </div>
   ) 
}