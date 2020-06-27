import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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

const DemoForm = () => {
    const[ inputs , setInputs ]=useState({});
    const[ genderValue , setGenderValue ] = useState('');
    const[ countryValue , setCountryValue ] = useState('');
    const[ tecStackValue , setTecStackValue ] = useState([]);
    const[ provinceValue , setProvinceValue ] = useState('');
    const[ cityOptions , setCityOptions ] = useState([]);
    const[ cityValue , setCityValue ] = useState('');
    const genderOptions = [
        { option: "please choose your gender" },
        { option: "male" },
        { option: "female" },
        { option: "secret" }
    ]
    const countryOptions = [
        { option: "please choose your country" },
        { option: "China" },
        { option: "US" },
        { option: "England" }
    ]
    const tecStackOptions = [
        { option: "Java" },
        { option: "Python" },
        { option: "JS" },
        { option: "PHP" },
        { option: "C#" },
        { option: "C++" },
    ]
    const provinceOptions = [
        { option: "please choose your province" , branch:["Choose your province first"]},
        { option: "Shaanxi" , branch:["Xi'an","Baoji","Hanzhong","Weinan"]},
        { option: "Heilongjiang" , branch:["Qiqihaer","Mudanjiang","Jiamusi","Daqing"]},
        { option: "Jiangsu" , branch:["Nanjing","Wuxi","Xuzhou","Changzhou"]}
    ]
    const handleSubmit = () => {
        // eslint-disable-next-line
        alert('User created! name:'+'\n'+inputs.firstName+inputs.lastName+'\n'+' age:'+inputs.age+'\n'+' Email:'+inputs.Email+'\n'+' Gender:'+genderValue+'\n'+' Contry:'+countryValue+'\n'+' Tec-Stack:'+tecStackValue+'\n'+" Province:"+provinceValue);
    }
    const handleInputChange = (e) => {
        e.persist();//***
        setInputs(inputs=>({...inputs,[e.target.name]:e.target.value}))
    }
    const handleGenderOnChange = (e) => {
        setGenderValue(e.target.value);
    }
    const handleCountryOnChange = (e) => {
        setCountryValue(e.target.value);
    }
    const handleTecStackValueChange = (e) => {
        let idx = tecStackValue.findIndex(item=>{
            return item===e.target.value 
        })
        if(idx>=0){
            if(idx===0&&tecStackValue.length===1){
                setTecStackValue([])
            }
            tecStackValue.splice(idx,1)
        }else{
            setTecStackValue([...tecStackValue,e.target.value])
            console.log(tecStackValue)
        }
    }
    const handleProvinceOnChange = (e) => {
        setProvinceValue(e.target.value)
    }
    const handleCityOnChange = (e) => {
        setCityValue(e.target.value)
    }
    return (
        <form>
            <div>
                <h3>DemoForm</h3>
            </div>
            <Input 
                lableName="FirstName:" type="text" name="firstName"
                onChange={handleInputChange} value={inputs.firstName}
            ></Input>
            <Input 
                lableName="LastName:" type="text" name="lastName"
                onChange={handleInputChange} value={inputs.lastName}
            ></Input>
            <Input 
                lableName="Age:" type="number" name="age"
                onChange={handleInputChange} value={inputs.age}
            ></Input>
            <Input 
                lableName="Email Address:" type="text" name="Email"
                onChange={handleInputChange} value={inputs.Email}
            ></Input>
            <SingleSelect
                lableName="Gender:"
                name="gender-select"
                onChange={handleGenderOnChange}
                options={genderOptions}
            ></SingleSelect>
            <SingleSelect
                lableName="Country:"
                name="country-select"
                onChange={handleCountryOnChange}
                options={countryOptions}
            ></SingleSelect>
            <div>
                <lable>
                    Technology Stack:
                </lable>
                <select name="tecStack" value={tecStackValue}  onChange={handleTecStackValueChange} multiple>
                    {tecStackOptions.map((item,index) => {
                        return <option key={index} value={item.option}>{item.option}</option>
                    })}
                </select>
            </div>
            <SingleSelect
                lableName="Province:"
                name="province"
                onChange={handleProvinceOnChange}
                options={provinceOptions}
            ></SingleSelect>
            <SingleSelect
                lableName="City:"
                name="city"
                onChange={handleCityOnChange}
                options={cityOptions}
            ></SingleSelect>
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
