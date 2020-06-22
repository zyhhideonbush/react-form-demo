import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import useSighUpForm from './CustomHooks';

const DemoForm = () => {
    const signup = () => {
        alert('User created! name:'+inputs.firstName+inputs.lastName+' age:'+inputs.age+' Email:'+inputs.Email+' Gender:'+genderValue+' Tec-Stack:'+javaValue+' '+pythonValue);
    }
    const{ inputs, handleInputChange, handleSubmit } = useSighUpForm(signup);
    const[ genderValue , setGenderValue ] = useState('');
    const[ javaValue , setJavaValue ] = useState('');
    const[ pythonValue , setPythonValue ] = useState('');

    const handleGenderOnChange = (e) => {
        setGenderValue(e.target.value);
    }
    const handleJavaOnChange = (e) => {
        setJavaValue(e.target.value);
    }
    const handlePythonOnChange = (e) => {
        setPythonValue(e.target.value);
    }
    return (
        <form>
            <div>
                <h3>DemoForm</h3>
            </div>
            <div>
                <label>
                    FirstName:
                </label>
                <input type="text" name="firstName"  onChange={handleInputChange} value={inputs.firstName} required/>
                <label>
                    LastName:
                </label>
                <input type="text" name="lastName"  onChange={handleInputChange} value={inputs.lastName} required/>
            </div>
            <div> 
                <label>
                    Age:  
                </label>
                <input type="text" name="age"  onChange={handleInputChange} value={inputs.age} required/>
            </div>
            <div> 
                <label>
                    Email Address:  
                </label>
                <input type="text" name="Email"  onChange={handleInputChange} value={inputs.Email} required/>
            </div>
            <div>
                <label>
                    Gender:  
                </label>
                <select name="gender-select" onChange={handleGenderOnChange}>
                    <option value="Not seleted">Choose your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="secret">Secret</option>
                </select>
            </div>
            <div>
                <label>
                    Technology Stack:
                </label>
                java<input type="checkbox" value="java" onChange={handleJavaOnChange}/>
                python<input type="checkbox" value="python" onChange={handlePythonOnChange}/>
            </div>
            <div>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
        </form>
    );
}

ReactDOM.render(
    <DemoForm />,
    document.getElementById('form-example')
);
