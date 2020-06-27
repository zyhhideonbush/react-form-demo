import React from 'react'

const SingleSelect = ({lableName,name,onChange,options}) => {
    return (
        <div>
            <label>
                {lableName} 
            </label>
            <select name={name} onChange={onChange}>
                {options.map((item,index) => {
                    return <option key={index} value={item.option}>{item.option}</option>
                })}
            </select>
        </div>
    );
}

export default SingleSelect;