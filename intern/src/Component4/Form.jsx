import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";
import { useState } from 'react';

function SubmitForm(props)
{

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    internship:"",
    question:""
  });
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:3005/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", email: "", phone: "" ,internship:"",question:""});
    navigate("/");
  }

function validate()
{
    if(document.myForm.UserName.value=="")
    {
        alert("Please provide name")
        return false
    }

    var email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(document.myForm.Email.value=="")
    {
        alert("Please provide Email")
        return false
    }

    if(!document.myForm.Email.value.match(email))
    {
        alert("Please enter correct email")
        return false
    }
   

    if(document.myForm.Phone.value=="" || isNaN( document.myForm.Phone.value ) ||(document.myForm.Phone.value.length != 10 ) )
    {
        alert("Phone number not correct")
        return false
    }
    
   

    if(document.myForm.Password.value=="")
    {
        alert("Please provide Password")
        return false
    }
    

    if(document.myForm.Confirm.value=="")
    {
        alert("Please provide Password")
        return false
    }

    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!document.myForm.Password.value.match(passw))
    {
        alert("Please enter password with minimum 7 characters and should contain atleast one capital letter,one digit and one special character")
        return false
    }

    if(document.myForm.Confirm.value!=document.myForm.Password.value)
    {
        alert("Password and confirm password doesn't match")
        return false
    }

    return true
}

return(
    <div className='form'>
    <h1>Welcome to {props.name} Internship</h1>
    
    <Container>

    <Row>
    <Col>
    <img className='formimg' src={props.img}></img>
    </Col>
    
    <Col>
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={form.name} onChange={(e) => updateForm({ name: e.target.value })} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={form.email} onChange={(e) => updateForm({ email: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="numeric" placeholder="Enter Phone number" value={form.phone} onChange={(e) => updateForm({ phone: e.target.value })}/>
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Internship</Form.Label>
        <Form.Control type="text" placeholder='Intenship Domain' value={form.internship} onChange={(e) => updateForm({ internship: e.target.value })}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Any Questions</Form.Label>
        <Form.Control type="text" placeholder='If you have any questions' value={form.question} onChange={(e) => updateForm({ question: e.target.value })}/>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
</Container>
<h3 ><center>What is {props.name} ?</center></h3>
<p>{props.info}</p>
    </div>
    
  );
}

export default SubmitForm;