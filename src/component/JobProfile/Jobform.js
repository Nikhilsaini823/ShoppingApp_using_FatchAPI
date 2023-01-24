import React, { useState } from "react";
import "./Jobform.css"
import { useDispatch, useSelector } from "react-redux";
import { saveUser, deleteData } from '../Action/DataSlice';

export const Jobform = () => {
  const [finalError, setFinalError] = useState({})
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.dataaction);
  // console.log('userData', userData)
  const formFields = ['id', 'name', 'email', 'password', 'pincode', 'fulladdress', 'gender', 'state', 'districts'];
  // const [editdata, setEditData] = useState(false)

  const [id, SetId] = useState(false);
  const [name, SetName] = useState(false);
  const [email, SetEmail] = useState(false);
  const [gender, SetGender] = useState(false);
  const [password, SetPassword] = useState(false);
  const [state, SetState] = useState(false);
  const [pincode, SetPincode] = useState(false);
  const [fulladdress, SetFulladdress] = useState(false);
  const [districts, SetDistricts] = useState(false);

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
    // dispatch(saveUser({name:'sdgdg',email:'hdfhdf@gmail.com'}));
    if (formData && Object.keys(formData).length === formFields.length) {
      // setFinalData({...finalData})
      dispatch(saveUser(formData));
      dispatch(deleteData(formData))
      // dispatch(editData(formData))

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
  const handleEdit = (item) => {
    // console.log("editdata", userData)

    // setEditData(item)
    SetId(item.id)
    SetName(item.name)
    SetEmail(item.email)
    SetPassword(item.password)
    SetGender(item.gender)
    SetPincode(item.pincode)
    SetFulladdress(item.fulladdress)
    SetDistricts(item.districts)
    SetState(item.state)
    // console.log('editdata', editdata)
  }

  // const onChangeValue = (event) => {
  //   setGender(event.target.value);
  // }
  // console.log('editdata', editdata)
  return (
    <>
      <form onSubmit={validate} className='container'>
        <h1 className="mt-3">Job Form</h1>
        <div className="form-row mt-3">
          <div className="form-group col-md-3">
            <label htmlFor="text">Emp.ID</label>
            <input type="number" className="form-control" name='id'
              value={id || ''}
              placeholder="123" onChange={(e) => {
                handleErrorMessage(e);
                SetId(e.target.value)
              }}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="text">Name</label>
            <input type="text" className="form-control" name='name'
              value={name || ''}
              placeholder="name" onChange={(e) => {
                handleErrorMessage(e);
                SetName(e.target.value);
              }} />
            {finalError.name && <p className='msgcolor' >{finalError.name}</p>}
          </div>
          <div className="form-group ">
            <label htmlFor="text">Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="male" name="gender"
                onChange={(e) => {
                  handleErrorMessage(e);
                }}
                checked={gender === 'male' && 'checked'}
              />
              <label className="radio-button" htmlFor="radio-button">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="female" name="gender"
                onChange={(e) => {
                  handleErrorMessage(e);
                }}
                checked={gender === 'female' && 'checked'}
              />
              <label className="form-check-label" htmlFor="radio-button">Female</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" value="others"
                checked={gender === 'others' && 'checked'}
                onChange={(e) => {
                  handleErrorMessage(e);
                }} />
              <label className="form-check-label" htmlFor="radio-button">Other</label>
            </div>
            {finalError.gender && <p className='msgcolor' >{finalError.gender}</p>}
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" name='email'
              value={email || ''}
              placeholder="Email"
              onChange={(e) => {
                handleErrorMessage(e);
                SetEmail(e.target.value)
              }} />
            {finalError.email && <p className='msgcolor ' >{finalError.email}</p>}
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" name='password'
              value={password || ''}
              placeholder="Password" onChange={(e) => {
                SetPassword(e.target.value)
                handleErrorMessage(e);
              }} />
            {finalError.password && <p className='msgcolor' >{finalError.password}</p>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select className="form-control" name='state'
            value={state || ''}
              onChange={(e) => {
                SetState(e.target.value)
                handleErrorMessage(e);
              }}>
              <option value={""}>Choose...</option>
              <option value={"HR"}>Haryana</option>
              <option value={"Other"}>Other..</option>
            </select>
            {finalError.state && <p className='msgcolor' >{finalError.state}</p>}
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Districts</label>
            <select className="form-control" name='districts'
            value={districts || ''}
             onChange={(e) => {
              handleErrorMessage(e);
              SetDistricts(e.target.value)
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
          <div className="form-group col-md-4">
            <label htmlFor="inputZip">Pincode</label>
            <input inputMode="numeric" maxLength="6" type="text" className="form-control" name='pincode'
              value={pincode || ''}
              placeholder="343-456" onChange={(e) => {
                handleErrorMessage(e);
                SetPincode(e.target.value)
              }} />
            {finalError.pincode && <p className='msgcolor' >{finalError.pincode}</p>}
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputAddress">Full Address</label>
            <input type="text" className="form-control" name="fulladdress"
              value={fulladdress || ''}
              placeholder="#34 Main St" onChange={(e) => {
                handleErrorMessage(e);
                SetFulladdress(e.target.value)
              }} />
            {finalError.fulladdress && <p className='msgcolor' >{finalError.fulladdress}</p>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3 " >Submit</button>
      </form>
      <div className="container">
        <h1 className='mt-5'>Final Table</h1>
        <table className="table container mt-3">
          <tbody>
            <tr>
              <th scope="col">id</th>
              <th scope='col'>Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Gender</th>
              <th scope="col">States</th>
              <th scope="col">Districts</th>
              <th scope="col">Pincode</th>
              <th scope="col">Fulladdress</th>
            </tr>
            {userData.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.gender}</td>
                  <td>{item.state}</td>
                  <td>{item.districts}</td>
                  <td>{item.pincode}</td>
                  <td>{item.fulladdress}</td>
                  <>
                    <td><button type="button" onClick={() => { dispatch(deleteData(item.id)) }} className="btn btn-outline-primary">Delete</button></td>
                    <td><button type="button" onClick={() => handleEdit(item)} className="btn btn-outline-primary">Edit</button></td>
                  </>

                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    </>
  )
}

export default Jobform;