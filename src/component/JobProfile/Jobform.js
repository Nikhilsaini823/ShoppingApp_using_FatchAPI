import { useState } from "react";
import "./Jobform.css"
import Provider from './Provider';
import Context from './Context';
import React, {Fragment} from "react";


export const Jobform = () => {
    const [finalError, setFinalError] = useState({})
    const [formData, setFormData] = useState({});

    const formFields = ['name', 'email', 'password', 'pincode', 'fulladdress', 'gender', 'state', 'districts'];
    

    const handleErrorMessage = (e) => {
        if (e.target.value === '') {
            setFinalError({ [e.target.name]: `${e.target.name} Should be required`, ...finalError });
            for (const key in formData) {
                if (key === e.target.name) {
                    delete formData[key];
                } else {
                    setFormData({ ...formData });
                    
                }
            }
        } 
        else {
            for (const key in finalError) {
                if (key === e.target.name) {
                    delete finalError[key];
                } else {
                    setFinalError({ ...finalError });
                }
            }
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }
    const validate = (event) => {
        event.preventDefault();
        if (formData && Object.keys(formData).length === formFields.length) { 
            // setFinalData({...finalData})
        }
        else {
            let finalError = {};
            for (const value of formFields) {
                if (!formData[value]) {
                    finalError = { ...finalError, [value]: `${value} Should be required` };
                }
            }
            setFinalError({ ...finalError });
        }
    }
    const AllData = () =>{
        return(
            <Context.Consumer>
                {
                    (context)=>(
                        <Fragment>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <td className='space'>{context.data.name}</td>
                                        <td className='space'>{context.data.email}</td>
                                        <td className='space'>{context.data.password}</td>
                                        <td className='space'>{context.data.gender}</td>
                                        <td className='space'>{context.data.state}</td>
                                        <td className='space'>{context.data.districts}</td>
                                        <td className='space'>{context.data.pincode}</td>
                                        <td className='space'>{context.data.fulladdress}</td>
                                    </tr>
                                </thead>
                        </Fragment>
                    )
                }
            </Context.Consumer>
        );
    }
    return (
        <div>
            <form onSubmit={validate} className='container'>
                <h1 className="mt-3">Job Form</h1>
                <div className="form-row mt-3">
                    <div className="form-group col-md-6">
                        <label htmlFor="text">Name</label>
                        <input type="text" className="form-control" name='name' placeholder="name" onChange={(e) => {
                            handleErrorMessage(e);
                        }} />
                        {finalError.name && <p className='msgcolor' >{finalError.name}</p>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="text">Gender</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="male" name="gender" onChange={(e) => {
                            handleErrorMessage(e);
                            }} />
                            <label className="radio-button" htmlFor="radio-button">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value="female" name="gender" onChange={(e) => {
                            handleErrorMessage(e);
                            }} />
                            <label className="form-check-label" htmlFor="radio-button">Female</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value="others" onChange={(e) => {
                            handleErrorMessage(e);
                            }} />
                            <label className="form-check-label" htmlFor="radio-button">Other</label>
                        </div>
                        {finalError.gender && <p className='msgcolor' >{finalError.gender}</p>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" name='email' placeholder="Email" onChange={(e) => {
                            handleErrorMessage(e);
                        }} />
                        {finalError.email && <p className='msgcolor ' >{finalError.email}</p>}
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" name='password' placeholder="Password" onChange={(e) => {handleErrorMessage(e);
                        }} />
                        {finalError.password && <p className='msgcolor' >{finalError.password}</p>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select className="form-control" name='state' onChange={(e) => {handleErrorMessage(e);
                        }}>
                            <option value={""}>Choose...</option>
                            <option value={"HR"}>Haryana</option>
                            <option value={"Other"}>Other..</option>
                        </select>
                        {finalError.state && <p className='msgcolor' >{finalError.state}</p>}
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Districts</label>
                        <select className="form-control" name='districts' onChange={(e) => {handleErrorMessage(e);
                        }} >
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
                        {finalError.districts && <p className='msgcolor' >{finalError.districts}</p>}
                    </div>
                    <div className="form-group col-md-4000">
                        <label htmlFor="inputZip">Pincode</label>
                        <input type="text" className="form-control" name='pincode' placeholder="343-456" onChange={(e) => {
                            handleErrorMessage(e);
                        }} />
                        {finalError.pincode && <p className='msgcolor' >{finalError.pincode}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Full Address</label>
                        <input type="text" className="form-control" name="fulladdress" placeholder="#34 Main St"onChange={(e) => {
                            handleErrorMessage(e);
                        }} />
                        {finalError.fulladdress && <p className='msgcolor' >{finalError.fulladdress}</p>}
                    </div>
                </div>
                <button type="submit"  className="btn btn-primary mt-3 " >Submit</button>
            </form>
            <div className="container">
                <h1 className='mt-5'>Final Table</h1>
                <Provider>
                    <table className="table container mt-3">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th scope='col'>Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Gender</th>
                                <th scope="col">States</th>
                                <th scope="col">Districts</th>
                                <th scope="col">Pincode</th>
                                <th scope="col">Fulladdress</th>
                            </tr>
                        </thead>
                    <AllData/> 
                  </table> 
                </Provider>
            </div>
        </div>
    )
}

export default Jobform;