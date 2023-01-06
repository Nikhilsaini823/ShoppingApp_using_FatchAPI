import React from 'react'
import  { useState } from "react";
import { Link } from 'react-router-dom'
import "./Jobform.css"

export const Jobform = () => {
    const [name, setName] = useState("")
    const [nameErr,setNameErr] = useState('')

    const handleNameChange = (event) =>{
        // console.log(event.target.value)
        setName(event.target.value)
    }  
    let status = true
    const validate = (e) => {
        e.preventDefault();
        if (name.length === 0 ){
            setNameErr('This field is required')
            status = false
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
                        <input className="form-check-input" type="radio" name="flexRadioDefault" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"  />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">Other</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control"  placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control"  placeholder="Password"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select className="form-control">
                        <option value={""}>Choose...</option>
                        <option value={"AP"}>Andhra Pradesh </option>
                        <option value={"BH"}>Bihar</option>
                        <option value={"Chhattisgarh"}>Chhattisgarh</option> 
                        <option value={"Goa"}>Goa</option> 
                        <option value={"Gujarat"}>Gujarat</option> 
                        <option value={"HR"}>Haryana</option> 
                        <option value={"HP"}>Himachal Pradesh</option> 
                        <option value={"PB"}>Punjab</option> 
                        <option value={"RJ"}>Rajasthan</option>
                        <option value={"UP"}>Uttar Pradesh</option> 
                        <option value={"UK"}>Uttarakhand</option>  
                        <option value={"Other"}>Other..</option>                  
                    </select>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Districts</label>
                    <select  className="form-control">
                        <option value={""}>Choose...</option>
                        <option value={"Ambala"}>Ambala </option>
                        <option value={"Bhiwani"}>Bhiwani</option>
                        <option value={"Faridabad"}>Faridabad</option> 
                        <option value={"Gurugram"}>Gurugram</option> 
                        <option value={"Hisar"}>Hisar</option> 
                        <option value={"Karnal"}>Karnal</option> 
                        <option value={"Panchkula"}>Panchkula</option> 
                        <option value={"Punjab"}>Punjab</option> 
                        <option value={"Panipat"}>Panipat</option>
                        <option value={"Sonipat"}>Sonipat</option> 
                        <option value={"Yamunanagar"}>Yamunanagar</option>
                        <option value={"Other"}>Other..</option>                  
                    </select>
                </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Pincode</label>
                <input type="text" className="form-control"  placeholder="#343-456"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Full Address</label>
                <input type="text" className="form-control"  placeholder="#34 Main St"/>
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
            <button  type="submit"  className="btn btn-primary mt-4">Submit</button>
        </form>
  )
}

export default Jobform;