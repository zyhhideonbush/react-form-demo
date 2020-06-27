import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input'
import SingleSelect from './components/SingleSelect'
// import MultipleSelect from './components/MultipleSelect'

const DemoForm = () => {
    const[ inputs , setInputs ]=useState({});
    const[ genderValue , setGenderValue ] = useState('');
    const[ countryValue , setCountryValue ] = useState('');
    const[ tecStackValue , setTecStackValue ] = useState([]);
    const[ provinceValue , setProvinceValue ] = useState('');
    const[ cityOptions , setCityOptions ] = useState([{option:'please choose your province at first'}]);
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
        { option: "please choose your province" , branch:[{option:"Choose your province first"}]},
        { option: "Shaanxi" , branch:[{option:"Xi'an"},{option:"Baoji"},{option:"Hanzhong"},{option:"Weinan"}]},
        { option: "Heilongjiang" , branch:[{option:"Qiqihaer"},{option:"Mudanjiang"},{option:"Jiamusi"},{option:"Daqing"}]},
        { option: "Jiangsu" , branch:[{option:"Nanjing"},{option:"Wuxi"},{option:"Xuzhou"},{option:"Changzhou"}]}
    ]
    const handleSubmit = () => {
        // eslint-disable-next-line
        alert('User created! name:'+'\n'+inputs.firstName+inputs.lastName+'\n'+' age:'+inputs.age+'\n'+' Email:'+inputs.Email+'\n'+' Gender:'+genderValue+'\n'+' Contry:'+countryValue+'\n'+' Tec-Stack:'+tecStackValue+'\n'+" Province:"+provinceValue+'\n'+" City:"+cityValue);
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
        const result = provinceOptions.filter(it=>it.option===e.target.value).map(it=>it.branch)[0]
        setCityOptions(result)
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
            {/* <MultipleSelect
                lableName="Technology Stack:"
                name="tecStack"
                value={tecStackValue}
                onChange={handleTecStackValueChange}
                tecoptions={tecStackOptions}
            ></MultipleSelect> */}
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
