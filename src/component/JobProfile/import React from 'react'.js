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
    const [errMsg, setErrMsg] = useState('')

    const handleClick = () =>{
        setErrMsg("")
    }  

    const finalData = [];
    const validate = (event) => {
        event.preventDefault();
        console.log(name);
        finalData.push({name:name, email:email, password:password, pincode:pincode, fulladdress:fulladdress});
        let status = true;
        if (name.length === 0 ){
            setErrMsg("This field is required")
            return status 
        }
        if (email.length === 0){
        }
        if (password.length === 0){
        }
        if (pincode.length === 0){
        }
        if (fulladdress.length === 0){
        }
        if (gender.length === 0){
        }
        if (states.length === 0){
        }
        if (distt.length === 0){
        }
        console.log(finalData)
        return status
    }   
    
   
  return (   
        <form onSubmit={validate} className='container'>
            <h1 className="mt-3">Job Form</h1>
            <div className="form-row mt-3">
                <div className="form-group col-md-6">
                    <label htmlFor="text">Name</label>
                    <input type="text" className="form-control"  placeholder="Name" onChange={() =>setName()} />
                    <p className='msgcolor'>{errMsg}</p>
                </div>
                <div className="form-group col-md-6">
                        <label htmlFor="text">Gender</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="male" name="radio" onChange={() =>setGender()} />
                        <label className="radio-button" htmlFor="radio-button">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="female" name="radio" onChange={() =>setGender()}  />
                        <label className="form-check-label" htmlFor="radio-button">Female</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio" value="others" onChange={() =>setGender()}/>
                        <label className="form-check-label" htmlFor="radio-button">Other</label>
                    </div>
                    <p className='msgcolor'>{errMsg}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control"  placeholder="Email" onChange={() =>setEmail()}/>
                    <p className='msgcolor'>{errMsg}</p>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input type="password" className="form-control"  placeholder="Password" onChange={() =>setPassword()}/>
                    <p className='msgcolor'>{errMsg}</p>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select className="form-control"  onChange={() =>setStates()}>
                        <option value={""}>Choose...</option>
                        <option value={"HR"}>Haryana</option> 
                        <option value={"Other"}>Other..</option>                  
                    </select>
                    <p className='msgcolor'>{errMsg}</p>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Districts</label>
                    <select  className="form-control"onChange={() =>setDistt()}>
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
                    <p className='msgcolor' >{errMsg}</p>
                </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Pincode</label>
                    <input type="text" className="form-control"  placeholder="343-456" onChange={() =>setPincode()}/>
                    <p className='msgcolor'>{errMsg}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Full Address</label>
                    <input type="text" className="form-control"  placeholder="#34 Main St" onChange={() =>setFullAddress()}/>
                    <p className='msgcolor'>{errMsg}</p>
            </div>
            </div>
            <button  type="submit" onClick={handleClick}  className="btn btn-primary " >Submit</button>
        </form>
  )
}

export default Jobform;


{/* <tbody>
                        {data.map((item, index) => (
                        <tr key={index}>
                            <td>{formData.name}</td>
                            <td>{formData.email}</td>
                            <td>{formData.password}</td>
                            <td>{formData.gender}</td>
                            <td>{formData.state}</td>
                            <td>{formData.districts}</td>
                            <td>{formData.pincode}</td>
                            <td>{formData.fulladdress}</td>
                        </tr>
                        )
                    </tbody> */}

                    const renderData = () => {
                        finalData.push(formData);
                        return finalData.map((final,index) => { 
                          return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className='space' >{final.name}</td>
                                <td className='space'>{final.email}</td>
                                <td className='space'>{final.password}</td>
                                <td className='space'>{final.gender}</td>
                                <td className='space'>{final.state}</td>
                                <td className='space'>{final.districts}</td>
                                <td className='space'>{final.pincode}</td>
                                <td className='space'>{final.fulladdress}</td>
                            </tr>
                          )
                        })
                      }
                    //   282932



        //             <div className='container'>
        //     <h1 className='mt-5'>Final Table</h1>
        //     <table className="table container mt-3">
        //         <thead>
        //             <tr>
        //                 <th>id</th>
        //                 <th scope='col'>Name</th>
        //                 <th scope="col">Email</th>
        //                 <th scope="col">Password</th>
        //                 <th scope="col">Gender</th>
        //                 <th scope="col">States</th>
        //                 <th scope="col">Districts</th>
        //                 <th scope="col">Pincode</th>
        //                 <th scope="col">Fulladdress</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //         {formData.map((final, index) => {
        //             console.log('final',final)
        //             return (
        //                 <tr key={index}>
        //                     <td>{index +1}</td>
        //                     <td className='space'>{final.name}</td>
        //                     <td className='space'>{final.email}</td>
        //                     <td className='space'>{final.password}</td>
        //                     <td className='space'>{final.gender}</td>
        //                     <td className='space'>{final.state}</td>
        //                     <td className='space'>{final.districts}</td>
        //                     <td className='space'>{final.pincode}</td>
        //                     <td className='space'>{final.fulladdress}</td>
        //                 </tr>
        //              );
        //             })}
        //         </tbody>
        //     </table>
        // </div>