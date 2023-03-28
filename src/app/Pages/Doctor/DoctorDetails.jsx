import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { PatternFormat } from 'react-number-format';
import axios from 'axios';
import { createRoot } from 'react-dom/client'

import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";
  import DemoApp from './DoctorSlots/DemoApp';
  import { Box, styled,Icon,Button } from '@mui/material';
  import { Span } from "app/components/Typography";
import { Breadcrumb, SimpleCard } from 'app/components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../Pages/Patient/Patient.css'
  const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
  }));
const DoctorDetails = () => {
    var doctor = useLocation()
    var doctorDetails = doctor.state.doctors
    const [disableFields, setDisableFields] = useState(true);
    const [availableSlots,setAvailableSlots] = useState(false)
    const [doctorSlots,setDoctorSlots] = useState(true)

    
    const [data, setData] = useState({
        id: doctorDetails.id,
        first_name: doctorDetails.first_name,
        surname: doctorDetails.surname,
        middle_name: doctorDetails.middle_name,
        date_of_birth: doctorDetails.date_of_birth,
        age: doctorDetails.age,
        gender: doctorDetails.gender,
        address: doctorDetails.address,
        mobile_no: doctorDetails.mobile_no,
        email: doctorDetails.email,
        cnic: doctorDetails.cnic,
        home_phone:doctorDetails.home_phone,
        work_phone:doctorDetails.work_phone,
        practitioner_type: doctorDetails.practitioner_type,
    });


    const handleInput = (e) => {
        let name, value;

        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setData({ ...data, [name]: value });
    };

    // ******************Doctor Details Toggle********************

    const handleDoctorSlots=()=>{
        setDoctorSlots(false)
    }
    const handleDoctorSlot=()=>{
        setDoctorSlots(true)
    }

    // ********************Available Slots Toggle***********************
    const handleAvailableSlots=()=>{
        setAvailableSlots(true)
    }

    const handleAvailableSlot=()=>{
        setAvailableSlots(false)
    }

       const updateDoctor = async () => {
        // e.preventDefault();
        // const url = `${data._id}`;

        try {
          const updateUser = await axios
            .put(`/api/users/${data.id}`, {
                id: data.id,
                first_name: data.first_name,
                surname: data.surname,
                middle_name: data.middle_name,
                date_of_birth: data.date_of_birth,
                age: data.age,
                gender: data.gender,
                address: data.address,
                mobile_no: data.mobile_no,
                email: data.email,
                cnic: data.cnic,
                home_phone:data.home_phone,
                work_phone:data.work_phone,
                practitioner_type:data.practitioner_type
            
            })
            .then((user) => {
              console.log("updateUser", user.data.updateData);
              data.first_name = user.data.updateData.first_name;
              data.surname = user.data.updateData.surname;
              data.middle_name = user.data.updateData.middle_name;
              data.date_of_birth = user.data.updateData.date_of_birth;
              data.age = user.data.updateData.age;
              data.gender = user.data.updateData.gender;
              data.address = user.data.updateData.address;
              data.practitioner_type = user.data.updateData.practitioner_type;
              data.address = user.data.updateData.address;
              data.mobile_no = user.data.updateData.mobile_no;
              data.email = user.data.updateData.email;
              data.cnic = user.data.updateData.cnic;
              data.home_phone = user.data.updateData.home_phone;
              data.work_phone = user.data.updateData.work_phone
            });
            updateUser && NotificationManager.success("Successfully Updated");

        } catch (error) {

        }
      };

    return (
        <Container>
        <Box className="breadcrumb">
        <Breadcrumb routeSegments={[ { name: 'Doctor Details' }]} />
      </Box>
 

        <div style={{display:"flex"}}>
        <button style={{border:"none"}} onClick={()=>{handleDoctorSlot();handleAvailableSlot()}}>Doctor Details</button>
        <button style={{border:"none",marginLeft:'2rem'}} onClick={()=>{handleDoctorSlots();handleAvailableSlots()}}>Available Slots</button>
        </div>

<div style={{marginTop:'2rem'}}>


        {doctorSlots ?  <div className="card">
                    <div className="card-body" style={{ margin: "0px" }}>
                        <h4>DOCTOR INFORMATION</h4>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <Button color='primary' variant="contained" onClick={() => {
                                setDisableFields(false);
            
                            }}> <Span sx={{ pl: 0, textTransform: "capitalize" }}>Edit</Span></Button>
                            <Button style={{marginLeft:'1rem'}} color='primary' variant="contained" onClick={() => {
                                setDisableFields(true); updateDoctor()
                            }} ><Span sx={{ pl: 0, textTransform: "capitalize" }}>Save</Span></Button>


                        </div>
                        <div className="row" style={{ marginTop: "2rem" }}>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="surname">
                                    {" "}
                                    <h6>Surname:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                {" "}
                                <input className="input_border" type="text" name="surname" placeholder="Surname..." value={data.surname} onChange={handleInput} disabled={disableFields} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="first_name">
                                    {" "}
                                    <h6>First Name:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                {" "}
                                <input className="input_border" type="text" name="first_name" placeholder="First Name..." value={data.first_name} onChange={handleInput} disabled={disableFields} />

                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="middle_name">
                                    {" "}
                                    <h6>Middle Name:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                {" "}
                                <input className="input_border" type="text" name="middle_name" placeholder="Middle Name..." value={data.middle_name} onChange={handleInput} disabled={disableFields} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="date_of_birth">
                                    {" "}
                                    <h6>Date of Birth:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    value={data.date_of_birth}
                                    onChange={handleInput}
                                    disabled={disableFields}
                                />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="age">
                                    {" "}
                                    <h6>Age:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                {" "}
                                <input
                                className="input_border"
                                    name="age"
                                    type="text"
                                    placeholder="age..."
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value))
                                            .toString()
                                            .slice(0, 3);
                                    }}
                                    value={data.age}
                                    onChange={handleInput}
                                    disabled={disableFields}
                                />

                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="gender">
                                    {" "}
                                    <h6>Gender:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-1">
                                {" "}
                                <select name="gender" class="form-control dropdown" value={data.gender} onChange={handleInput} disabled={disableFields}>
                                    <option
                                        value=""
                                        selected="selected"
                                        disabled="disabled"
                                    >
                                        Select Gender...
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border  p-3">
                                <label htmlFor="address">
                                    {" "}
                                    <h6>Address:</h6>
                                </label>
                            </div>
                            <div className="col-xl-10 col-lg-2 col-sm-2 border p-3">
                                <input className="input_width"  type="text" name="address" placeholder="Address..." value={data.address} onChange={handleInput} disabled={disableFields} />
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border  p-3">
                                <label htmlFor="homephone">
                                    {" "}
                                    <h6>Home Phone:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="homephone" placeholder="Home Phone..." onChange={handleInput} disabled={disableFields} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="workphone">
                                    {" "}
                                    <h6>Work Phone:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="workphone" placeholder="Work Phone..." onChange={handleInput} disabled={disableFields} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="mobile_no">
                                    <h6>Mobile No:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="number" name="mobile_no" placeholder="Mobile No..." onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value))
                                        .toString()
                                        .slice(0, 11);
                                }} value={data.mobile_no} onChange={handleInput} disabled={disableFields} />
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="email">
                                    <h6>Email:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="email" name="email" placeholder="Email..." value={data.email} onChange={handleInput} disabled={disableFields} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="occupation">
                                    <h6>Occupation:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="occupation" placeholder="Occupation..." value={data.occupation} onChange={handleInput} disabled={disableFields} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="designation">
                                    <h6>Designation:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="designation" placeholder="Designation..." onChange={handleInput} disabled={disableFields} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="doctorname">
                                    <h6>Your Doctor"s Name:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="doctorname" placeholder="Your Doctor Name..." onChange={handleInput} disabled={disableFields} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="cnic">
                                    <h6>CNIC:</h6>
                                </label>
                            </div>


                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">

                                <PatternFormat
                                    style={{
                                        width: "100%",
                                        borderColor: "grey",
                                    }}
                                    className="input_border"
                                    required
                                    name="cnic"
                                    format="#####-#######-#"
                                    allowEmptyFormatting
                                    mask="x"
                                    value={data.cnic}
                                    onChange={handleInput}
                                    disabled={disableFields}
                                />
                            </div>


                        </div>


                    </div>
                </div> :null }
                </div>
  
        
          
<div style={{marginTop:'2rem'}}>

{availableSlots ?
<div className='card'>
    <div className='card-body'>
    <DemoApp data={data.id}/>

    </div>
</div>
:null}
</div>



          
        </Container>

      
          
        
    )
}

export default DoctorDetails