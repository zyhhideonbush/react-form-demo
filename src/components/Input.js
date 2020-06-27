import React from 'react'

const Input = ({lableName,type,name,onChange,value}) => {
    return (
        <div>
            <label>
                {lableName}
            </label>
            <input type={type} name={name}  onChange={onChange} value={value} required/>
        </div>
    );
}

export default Input;
