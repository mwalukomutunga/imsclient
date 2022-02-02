import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react';

import requests from '../agent';

const FormData = () => {
    const page = "/Students";
    const [students,setStudents] = useState([])
    const [data, setData] = useState({
        EventId: "",
        FirstName: "FirstName",
        LastName: "LastName",
        Email: "user@example.com",
        Telephone: "",
        Address: "",
        Region: "",
        Department: "",
        Company: "",
        Designation: "",
        AreaOfExpertise: "",
        Gender: "",
        DOB: "2022-01-27T10:15:43.439Z",
        AcademicBackground: "",
        WorkExperience: "",
        ExperienceCurrentPosition: "string",
        Signature: true,
        IdentityDocument: "12345"
    });

    useEffect(() => {
        requests.get(page).then(response => {            
            setStudents(response);
        })
    }, []);

    const handleInputChange = (event) => {
        event.persist();
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setData((data) => ({ ...data, [name]: value }));
    };
    const handleSubmit = () =>{
       // console.log(data);
        requests.post(page, data);
    }
    return (
        <Form>
            <Form.Group widths={2}>
                <Form.Field>
                    <label>TELEPHONE NO</label>
                    <input name='Telephone' required value={data.Telephone} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>EMAIL</label>
                    <input name='Email' required value={data.Email} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={2}>
                <Form.Field>
                    <label>FIRST NAME</label>
                    <input placeholder='First Name' name='FirstName' required value={data.FirstName} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>LAST NAME</label>
                    <input name='LastName' required value={data.LastName} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={2}>

                <Form.Field>
                    <label>DESIGNATION</label>
                    <input name='Designation' required value={data.Designation} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>AREA OF EXPERTISE</label>
                    <input name='AreaOfExpertise' required value={data.AreaOfExpertise} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={2}>
                <Form.Field>
                    <label>GENDER</label>
                    <input name='Gender' required value={data.Gender} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>DATE OF BIRTH</label>
                    <input type='date' name='DOB' required value={data.DOB} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={2}>
                <Form.Field>
                    <label>ACADEMIC BACKGROUND</label>
                    <input name='AcademicBackground' required value={data.AcademicBackground} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>COMPANY</label>
                    <input name='Company' required value={data.Company} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group>
            <Form.Group widths={2}>

                <Form.Field>
                    <label>DEPARTMENT</label>
                    <input name='Department' required value={data.Department} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>PHYSICAL & POSTAL ADDRESS</label>
                    <input name='Address' required value={data.Address} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group>
            
            {/* <Form.Group widths={2}>
                <Form.Field>
                    <label>WORK EXPERIENCE</label>
                    <input name='WorkExperience' required value={data.WorkExperience} onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>EXPERIENCE AT CURRENT POSITION</label>
                    <input name='ExperienceCurrentPosition' required value={data.ExperienceCurrentPosition} onChange={handleInputChange} />
                </Form.Field>
            </Form.Group> */}
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'   onClick={handleSubmit}>Submit</Button>

        </Form>
    )
}

export default FormData