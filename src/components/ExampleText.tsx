import React, { useState, FunctionComponent }  from 'react';
import "../App.css";

type ExampleTextProps = {
    value: string
}

export const ExampleText = ({value}: ExampleTextProps)=>{
    return (
        <div>
            <span className="enfasis">Example:</span>
            <span className="example">"{value}"</span>
        </div>
    )
}
