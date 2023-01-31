import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { editData, updateData } from '../Action/DataSlice';

function EditJobForm() {
    const { itemid } = useParams(item => item.dataaction);
    const { currentUsers, userData } = useSelector(state => state.dataaction);
    const [editUser, setEditUser] = useState({});
    const navigator = useNavigate()

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(editData(itemid))
      setEditUser(currentUsers);
    },[currentUsers])

    function handleEdit(e){
      e.preventDefault();
      const finalData = [];
      userData.map((item) => {
        if(item.id == editUser.id){
          finalData.push(editUser);
        }else{
          finalData.push(item);
        }
      })
      dispatch(updateData(finalData));
      navigator('/jobform');
    }
    
    function hendelinput(e){
      const updatedData = {...editUser, [e.target.name]:e.target.value};
      setEditUser(updatedData);      
    }
    
    return (
        <>
          <form onSubmit={handleEdit} className='container'>
            <h1 className="mt-3">Edit Form</h1>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <label htmlFor="text">Emp.ID</label>
                <input type="number" className="form-control" name='id' defaultValue={editUser.id}
                  placeholder="123" 
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="text">Name</label>
                <input type="text" className="form-control" name='name'
                defaultValue={currentUsers.name}
                  placeholder="name" onChange={hendelinput} />
                
              </div>
              <div className="form-group ">
                <label htmlFor="text">Gender</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" defaultValue='male' name="gender"
                    onChange={hendelinput}
                    checked={editUser.gender === 'male' && 'checked'}
                  />
                  <label className="radio-button" htmlFor="radio-button">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" defaultValue="female" name="gender"
                    onChange={hendelinput}
                    checked={editUser.gender === 'female' && 'checked'}
                  />
                  <label className="form-check-label" htmlFor="radio-button">Female</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" defaultValue='other'
                    checked={editUser.gender === 'others' && 'checked'}
                    onChange={hendelinput}/>
                  <label className="form-check-label" htmlFor="radio-button">Other</label>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" name='email'
               defaultValue={editUser.email}
                  placeholder="Email"
                  onChange={hendelinput} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" name='password'
                defaultValue={editUser.password}
                  placeholder="Password" onChange={hendelinput} />
                
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select className="form-control" name='state'
                value={editUser.state}
                onChange={hendelinput}>
                  <option value={""}>Choose...</option>
                  <option value={"HR"}>Haryana</option>
                  <option value={"Other"}>Other..</option>
                </select>
               
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Districts</label>
                <select className="form-control" name='districts'
                value={editUser.districts}
                onChange={hendelinput} >
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
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputZip">Pincode</label>
                <input inputMode="numeric" maxLength="6" type="text" className="form-control" name='pincode'
                defaultValue={editUser.pincode}
                  placeholder="343-456" onChange={hendelinput} />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="inputAddress">Full Address</label>
                <input type="text" className="form-control" name="fulladdress"
                defaultValue={editUser.fulladdress}
                  placeholder="#34 Main St" onChange={hendelinput} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 "  
             >Update Data</button>
             <Link type="submit" to='/jobform' className="btn btn-primary mt-3 mx-3 "  
             >Back</Link>
          </form>
          
        </>
    )
}

export default EditJobForm
