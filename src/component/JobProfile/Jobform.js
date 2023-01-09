import React from 'react'
import  { useState } from "react";
import "./Jobform.css"

export const Jobform = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pincode, setPincode] = useState('')
    const [fulladdress, setFullAddress ] = useState('')
    const [gender, setGender] = useState('')
    const [states, setStates] = useState('')
    const [distt, setDistt] = useState('')
    const [nameErr,setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [pincodeErr, setPincodeErr] = useState('')
    const [fulladdressErr, setFullAddressErr] = useState('')
    const [genderErr, setGenderErr] = useState('')
    const [statesErr, setStatesErr] = useState('')
    const [disttErr, setDisstErr] = useState('')


    const handleNameChange = (event) =>{
        setNameErr("")
        setName(event.target.value)
    }  
    const hendleEmailChange = (event) =>{
        setEmailErr('')
        setEmail(event.target.value)
    }
    const hendlePasswordChange = (event) =>{
        setPasswordErr('')
        setPassword(event.target.value)
    }
    const hendlePincodeChange = (event) => {
        setPincodeErr('')
        setPincode(event.target.value)
    }
    const hendleFulladdChange = (event) =>{
        setFullAddressErr('')
        setFullAddress(event.target.value)
    }
    const hendelGenderChange = (event) =>{
        setGenderErr('')
        setGender(event.target.value)
    }
    const hendleStatesChange = (event) =>{
        setStatesErr('')
        setStates(event.target.value)
    }
    const hendleDisttChange= (event) =>{
        setDisstErr('')
        setDistt(event.target.value)
    }

    const validate = (e) => {
        let status = true
        e.preventDefault();
        if (name.length === 0 ){
            setNameErr('This field is required')
        }
        if (email.length === 0){
            setEmailErr('This field is required')
        }
        if (password.length === 0){
            setPasswordErr('This field is required')
        }
        if (pincode.length === 0){
            setPincodeErr('This field is required')
        }
        if (fulladdress.length === 0){
            setFullAddressErr('This field is required')
        }
        if (gender.length === 0){
            setGenderErr('Select atleast one button')
        }
        if (states.length === 0){
            setStatesErr('Please select State')
        }
        if (distt.length === 0){
            setDisstErr('Please select District')
        }
        return status 
    }   
    
   
  return (   
        <form onSubmit={validate} className='container'>
            <h1 className="mt-3">Job Form</h1>
            <div className="form-row mt-3">
                <div className="form-group col-md-6">
                    <label htmlFor="text">Name</label>
                    <input type="text" className="form-control"  placeholder="Name" onChange={handleNameChange}/>
                    <p className='msgcolor'>{nameErr}</p>
                </div>
                <div className="form-group col-md-6">
                        <label htmlFor="text">Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" onChange={hendelGenderChange} />
                        <label className="radio-button" htmlFor="radio-button">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" onChange={hendelGenderChange}  />
                        <label className="form-check-label" htmlFor="radio-button">Female</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" onChange={hendelGenderChange}/>
                        <label className="form-check-label" htmlFor="radio-button">Other</label>
                    </div>
                    <p className='msgcolor'>{genderErr}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control"  placeholder="Email" onChange={hendleEmailChange}/>
                    <p className='msgcolor'>{emailErr}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control"  placeholder="Password" onChange={hendlePasswordChange}/>
                    <p className='msgcolor'>{passwordErr}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select className="form-control"  onChange={hendleStatesChange}>
                        <option value={""}>Choose...</option>
                        <option value={"HR"}>Haryana</option> 
                        <option value={"Other"}>Other..</option>                  
                    </select>
                    <p className='msgcolor'>{statesErr}</p>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Districts</label>
                    <select  className="form-control" onChange={hendleDisttChange}>
                        <option value={""}>Choose...</option>
                        <option value={"Ambala"}>Ambala </option>
                        <option value={"Bhiwani"}>Bhiwani</option>
                        <option value={"Faridabad"}>Faridabad</option> 
                        <option value={"Gurugram"}>Gurugram</option> 
                        <option value={"Hisar"}>Hisar</option> 
                        <option value={"Karnal"}>Karnal</option> 
                        <option value={"Panchkula"}>Panchkula</option> 
                        <option value={"Panipat"}>Panipat</option>
                        <option value={"Sonipat"}>Sonipat</option> 
                        <option value={"Yamunanagar"}>Yamunanagar</option>
                        <option value={"Other"}>Other..</option>                  
                    </select>
                    <p className='msgcolor' >{disttErr}</p>
                </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Pincode</label>
                    <input type="text" className="form-control"  placeholder="343-456" onChange={hendlePincodeChange}/>
                    <p className='msgcolor'>{pincodeErr}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Full Address</label>
                    <input type="text" className="form-control"  placeholder="#34 Main St" onChange={hendleFulladdChange}/>
                    <p className='msgcolor'>{fulladdressErr}</p>
            </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button  type="submit"  className="btn btn-primary mt-4" >Submit</button>
        </form>
  )
}

export default Jobform;