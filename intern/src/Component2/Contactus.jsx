import React from 'react'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../Images/contact.jpeg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Contact()
{
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message : ""
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
      
        await fetch("http://localhost:3005/names/add", {
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
      
        setForm({ name: "", email: "", subject: "" ,message:""});
        navigate("/");
      }
    
    
 
    return(
        <section id='contact'>
           <h1>Contact Us</h1>
           <Container>
            <Row>
                <Col>
                    <h2>Lets Talk about everything!</h2>
                    <h4>Feel free to contact us. We are here to help you.</h4>
                    <img style={{height:600}} src={img}></img>
                </Col>
                <Col>
               
                <form onSubmit={onSubmit}>
      
        <input className='input' type="text" placeholder='Name' value={form.name} onChange={(e) => updateForm({ name: e.target.value })}/>

  
        <input className='input' type="text" placeholder='Email' value={form.email} onChange={(e) => updateForm({ email: e.target.value })}/>
   
        <input className='input' type="text" placeholder='Subject' value={form.subject} onChange={(e) => updateForm({ subject: e.target.value })}/>
 
  
        <input className='msg' type="text" placeholder='Write your message' value={form.message} onChange={(e) => updateForm({ message: e.target.value })}/>

        <Button className='sendbutton' type='submit' variant="dark">Send Message</Button>{' '}
    </form>

            </Col>
            </Row>
           </Container>
        </section>
    )
}

export default Contact;