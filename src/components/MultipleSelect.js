import React from 'react';

const MultipleSelect = (lableName,name,value,onChange,tecoptions) => {
    return (
        <div>
            <lable>
                {lableName}
            </lable>
            <select name={name} value={value} onChange={onChange} multiple>
                {tecoptions.map((item,index) => {
                    return <option key={index} value={item.option}>{item.option}</option>
                })}
            </select>
        </div>
    );
}

export default MultipleSelect;