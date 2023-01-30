import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { editData } from '../Action/DataSlice';

function EditJobForm() {
  // const [editvalue, setEditvalue] = useState({});
    const { itemid } = useParams(item => item.dataaction);
    const { currentUsers } = useSelector(state => state.dataaction);
    const [editUser, setEditUser] = useState({});
    // const navigate = useNavigate();
    
    // console.log('data',itemid)
    // console.log('currentUsers',currentUsers)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(editData(itemid))
      setEditUser(currentUsers);
    },[itemid,currentUsers])

    console.log('editUser',editUser)
    
    return (
          <form  className='container'>
            <h1 className="mt-3">Edit Form</h1>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <label htmlFor="text">Emp.ID</label>
                <input type="number" className="form-control" name='id' defaultValue={editUser.id}
                  placeholder="123" onChange={(e) => {
                    // SetId(currentUsers.value)
                  }}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="text">Name</label>
                <input type="text" className="form-control" name='name'
                defaultValue={currentUsers.name}
                  placeholder="name" onChange={(e) => {
                  }} />
                
              </div>
              <div className="form-group ">
                <label htmlFor="text">Gender</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" defaultValue='male' name="gender"
                    onChange={(e) => {
                    }}
                    checked={editUser.gender === 'male' && 'checked'}
                  />
                  <label className="radio-button" htmlFor="radio-button">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" defaultValue="female" name="gender"
                    onChange={(e) => {
                    }}
                    checked={editUser.gender === 'female' && 'checked'}
                  />
                  <label className="form-check-label" htmlFor="radio-button">Female</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" defaultValue='other'
                    checked={editUser.gender === 'others' && 'checked'}
                    onChange={(e) => {
                    }} />
                  <label className="form-check-label" htmlFor="radio-button">Other</label>
                </div>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" name='email'
               defaultValue={editUser.email}
                  placeholder="Email"
                  onChange={(e) => {
                  }} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" name='password'
                defaultValue={editUser.password}
                  placeholder="Password" onChange={(e) => {
                  }} />
                
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select className="form-control" name='state'
                defaultValue={editUser.state}
                  onChange={(e) => {
                  }}>
                  <option value={""}>Choose...</option>
                  <option value={"HR"}>Haryana</option>
                  <option value={"Other"}>Other..</option>
                </select>
               
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">Districts</label>
                <select className="form-control" name='districts'
                defaultValue={editUser.districts}
                 onChange={(e) => {
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
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputZip">Pincode</label>
                <input inputMode="numeric" maxLength="6" type="text" className="form-control" name='pincode'
                defaultValue={editUser.pincode}
                  placeholder="343-456" onChange={(e) => {
                  }} />
              </div>
              <div className="form-group col-md-5">
                <label htmlFor="inputAddress">Full Address</label>
                <input type="text" className="form-control" name="fulladdress"
                defaultValue={editUser.fulladdress}
                  placeholder="#34 Main St" onChange={(e) => {
                  }} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 "  
            //  onClick={handleEdit()}
             >Edit Data</button>
          </form>
    )
}

export default EditJobForm
