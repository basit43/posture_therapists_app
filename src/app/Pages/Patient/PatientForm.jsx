import React,{useEffect,useState} from "react"
import { useFormik } from "formik"
// import { registrationValidation } from "../../Components/Validation/validationSchema"
import axios from "axios"
import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";
import { PatternFormat } from "react-number-format";
import './Patient.css'
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';

const initialValue = {
    surname: "",
    first_name: "",
    middle_name: "",
    date_of_birth: "",
    age: "",
    gender: "",
    address: "",
    mobile_no: "",
    email: "",
    occupation: "",
    designation: "",
    cnic: "",
    physiotherapist_seen_before: "",
    patient_concerns_for_previous_physiotherapist: "",
    patient_satisfactions_for_previous_physiotherapist: "",
    homephone: "",
    workphone: "",
    nothappy: "",
    happywith: "",
    todaysession: "",
    stoppingyou: "",
    fixednow: "",
    patientrelationship: "",
    prevmobileno: "",
    contactperson: "",
    doctorname: "",


}
const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
      marginBottom: '30px',
      [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
  }));


const PatientForm = () => {

    const [diseases,setDiseases] = useState([])
    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({

        initialValues: initialValue,
        // validationSchema: registrationValidation,
        onSubmit: async (values, action) => {
            console.log("error")
            try {
               const patientForm =  await axios.post('/api/patients', {
                    surname: values.surname,
                    first_name: values.first_name,
                    middle_name: values.middle_name,
                    date_of_birth: values.date_of_birth,
                    age: values.age,
                    gender: values.gender,
                    address: values.address,
                    mobile_no: values.mobile_no,
                    email: values.email,
                    occupation: values.occupation,
                    designation: values.designation,
                    cnic: values.cnic,
                    physiotherapist_seen_before: values.physiotherapist_seen_before,
                    patient_concerns_for_previous_physiotherapist: values.patient_satisfactions_for_previous_physiotherapist,
                    patient_satisfactions_for_previous_physiotherapist: values.patient_satisfactions_for_previous_physiotherapist,

                })
                patientForm && NotificationManager.success("Successfully Registered");
            } catch (error) {
                console.log("error", error)
            }
            action.resetForm()
        }


    })
    const test = () => {
        console.log("values", values)
    }
    useEffect(()=>{
        axios.get('api/diseases').then((res)=>{setDiseases(res.data);console.log("res",res)}
            
    
        )
    
    },[])
    return (
        // <>
    <Container>

            {/* <section className="content"> */}

            <Box className="breadcrumb">
        <Breadcrumb routeSegments={[ { name: 'Patient Registration' }]} />
      </Box>
                {/* <div className="container-fluid">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <ul className="breadcrumb breadcrumb-style ">
                                    <li className="breadcrumb-item">
                                        <h4 className="page-title">Patient Registration</h4>
                                    </li>
                                    <li className="breadcrumb-item bcrumb-1">
                                        <a href="../../index.html">
                                            <i className="fas fa-home"></i> Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item bcrumb-2">
                                        <a href="#">Patient Management</a>
                                    </li>
                                    <li className="breadcrumb-item active">Patient Registration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div> */}


{/* ***********************Patient Information********************* */}

                <div className="card">
                    <div className="card-body" style={{ margin: "10px" }}>
                        <h4>PATIENT INFORMATION</h4>

                        <div className="row" style={{ marginTop: "2rem" }}>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="surname">
                                    {" "}
                                    <h6>Surname:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3" >
                                {" "}
                                <input className="input_border" type="text" name="surname" placeholder="Surname..." value={values.surname} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="first_name">
                                    {" "}
                                    <h6>First Name:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                {" "}
                                <input className="input_border" type="text" name="first_name" placeholder="First Name..." value={values.first_name} onChange={handleChange} onBlur={handleBlur} />
                                {errors.first_name && touched.first_name ? (<p style={{ color: "red" }}>{errors.first_name}</p>) : null}
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="middle_name">
                                    {" "}
                                    <h6>Middle Name:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                {" "}
                                <input className="input_border" type="text" name="middle_name" placeholder="Middle Name..." value={values.middle_name} onChange={handleChange} onBlur={handleBlur} />
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
                                    value={values.date_of_birth}
                                    onChange={handleChange} onBlur={handleBlur}
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
                                    value={values.age}
                                    onChange={handleChange} onBlur={handleBlur}
                                />
                                {errors.age && touched.age ? (<p style={{ color: "red" }}>{errors.age}</p>) : null}
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="gender">
                                    {" "}
                                    <h6>Gender:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-2">
                                {" "}
                                <select name="gender" class="form-control dropdown" onChange={handleChange} value={values.gender}>
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
                                {errors.gender && touched.gender ? (<p style={{ color: "red" }}>{errors.gender}</p>) : null}
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
                                <input className="input_width" type="text" name="address" placeholder="Address..." value={values.address} onChange={handleChange} />
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
                                <input className="input_border" type="text" name="homephone" placeholder="Home Phone..." value={values.homephone} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="workphone">
                                    {" "}
                                    <h6>Work Phone:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="workphone" placeholder="Work Phone..." value={values.workphone} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="mobile_no">
                                    <h6>Mobile No:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="number" name="mobile_no" placeholder="Mobile No..." value={values.mobile_no} onChange={handleChange} onBlur={handleBlur} onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value))
                                        .toString()
                                        .slice(0, 11);
                                }} />
                            </div>
                            {errors.mobile_no && touched.mobile_no ? (<p style={{ color: "red" }}>{errors.mobile_no}</p>) : null}
                        </div>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="email">
                                    <h6>Email:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="email" name="email" placeholder="Email..." value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="occupation">
                                    <h6>Occupation:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="occupation" placeholder="Occupation..." value={values.occupation} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="designation">
                                    <h6>Designation:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="designation" placeholder="Designation..." value={values.designation} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="doctorname">
                                    <h6>Your Doctor"s Name:</h6>
                                </label>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <input className="input_border" type="text" name="doctorname" placeholder="Your Doctor Name..." />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="cnic">
                                    <h6>CNIC:</h6>
                                </label>
                            </div>


                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">

                                <PatternFormat
                                className="input_border"
                                    style={{
                                        width: "100%",
                                        borderColor: "grey",
                                    }}
                                    required
                                    name="cnic"
                                    format="#####-#######-#"
                                    allowEmptyFormatting
                                    mask="x"
                                    defaultValue={values.cnic}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="past_medical_history">
                                    <h6>Disease:</h6>
                                </label>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                            {/* <select name="past_medical_history" class="form-control dropdown" >
                                        <option
                                            value=""
                                            selected="selected"
                                            disabled="disabled"
                                        >
                                            Select ...
                                        </option>
                                        <option>Yes</option>
                                        <option>No</option>

                                    </select> */}

<select class="form-control dropdown"
                                //   onClick={(e) => {
                                //     setSelectDepartment(e.target.value);
                                //     setUpdate(!update);
                                //   }}
                              
                                >
                                  <option value="none" selected disabled hidden>
                                    Select Disease... 
                                  </option>

                                  {diseases &&
                                    diseases.map((d) => (
                                      <option value={`${d.id}`} key={d.id}>
                                        {d.name}
                                      </option>
                                    ))}
                                </select>

                                 
                            </div>


                        </div>


                    </div>
                </div>

                {/* *****************Previous Treatment************ */}



                <div className="card" style={{marginTop:'2rem'}}>
                    <div className="card-body" style={{ margin: "10px"}}>
                        <h4>PREVIOUS TREATMENT</h4>


                        <div className="row" style={{ marginTop: "2rem" }}>
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="physiotherapist_seen_before">
                                    <h6>Have you seen another physiotherapist before?</h6>
                                </label>
                            </div>
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-1">
                                <div style={{ marginLeft: "4rem" }}>
                                    {/* <input name="physiotherapist_seen_before" type="radio" onChange={handleChange} value={values.physiotherapist_seen_before} />
                                    <span>
                                        Yes
                                    </span>

                                    <span style={{ marginLeft: "3rem" }}>
                                        <input name="physiotherapist_seen_before" type="radio" onChange={handleChange} value={values.physiotherapist_seen_before} />
                                        <span>
                                            No
                                        </span>
                                    </span> */}

                                    {" "}
                                    <select name="physiotherapist_seen_before" class="form-control dropdown" onChange={handleChange} value={values.physiotherapist_seen_before}>
                                        <option
                                            value=""
                                            selected="selected"
                                            disabled="disabled"
                                        >
                                            Select ...
                                        </option>
                                        <option>Yes</option>
                                        <option>No</option>

                                    </select>




                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="patient_concerns_for_previous_physiotherapist">
                                    <h6>If Yes, was there anything you were not happy about?</h6>
                                </label>
                            </div>
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-2">
                                {/* <input type="text" name="patient_concerns_for_previous_physiotherapist " value={values.patient_concerns_for_previous_physiotherapist } onChange={handleChange} onBlur={handleBlur} /> */}
                                <input className="input_width" type="text" name="patient_concerns_for_previous_physiotherapist" value={values.patient_concerns_for_previous_physiotherapist} onChange={handleChange} onBlur={handleBlur} />
                            </div>



                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="patient_satisfactions_for_previous_physiotherapist">
                                    <h6>What aspects were you most happy with?</h6>
                                </label>
                            </div>
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-2">
                                <input className="input_width" type="text" name="patient_satisfactions_for_previous_physiotherapist" value={values.patient_satisfactions_for_previous_physiotherapist} onChange={handleChange} onBlur={handleBlur} />
                            </div>



                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="todaysession">
                                    <h6>What are the main things you would like to achieve by the end of today"s session?</h6>
                                </label>
                            </div>

                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-2">
                                <input className="input_width"  type="text" name="todaysession" value={values.todaysession} onChange={handleChange} onBlur={handleBlur} />
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="stoppingyou">
                                    <h6>What is this problem you are here for stopping you from doing?</h6>
                                </label>
                            </div>

                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-2">
                                <input className="input_width" type="text" name="stoppingyou" value={values.stoppingyou} onChange={handleChange} onBlur={handleBlur} />
                            </div>


                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="fixednow">
                                    <h6>Why is it important that you get this problem fixed NOW?</h6>
                                </label>
                            </div>

                            <div className="col-xl-6 col-lg-2 col-sm-2 border p-2">
                                <input className="input_width" type="text" name="fixednow" value={values.fixednow} onChange={handleChange} onBlur={handleBlur} />
                            </div>


                        </div>


                    </div>

                </div>

                {/* ************In Case of Emergency******************* */}
                
                <div className="card" style={{marginTop:'2rem'}}>
                    <div className="card-body" style={{ margin: "10px" }}>
                        <h4>In Case of Emergency</h4>

                        <div className="row" style={{ marginTop: "2rem" }}>

                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="contactperson">
                                    <h6>Contact Person:</h6>
                                </label>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-2">
                                <input className="input_border" type="text" name="contactperson" value={values.contactperson} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="patientrelationship">
                                    <h6>Relationship to Patient:</h6>
                                </label>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-2">
                                <input className="input_border" type="text" name="patientrelationship" value={values.patientrelationship} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-3">
                                <label htmlFor="prevmobileno">
                                    <h6>Mobile No:</h6>
                                </label>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-sm-2 border p-2">
                                <input className="input_border" type="number" name="prevmobileno" value={values.prevmobileno} onChange={handleChange} onBlur={handleBlur} onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value))
                                        .toString()
                                        .slice(0, 11);
                                }} />
                                {errors.prevmobileno && touched.prevmobileno ? (<p style={{ color: "red" }}>{errors.prevmobileno}</p>) : null}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", margin: "1rem" }}>
                        <div>

                            <button style={{ padding: "0.5rem", border: "0.5px solid grey", borderRadius: "5px", fontWeight: "bold", background: "#365CAD", color: "white" }} type="button" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>


                </div>


            {/* </section>
             */}
    </Container>

    
    )
}

export default PatientForm