import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Styles.css';
import img from '../Images/intern.jpeg';

function about()
{
    return(
        
        <section id='aboutus'>
  
        <h1>About us</h1>
            <Container>
            <Row>
                <Col className='About'>
                MyIntern was founded in 2006 with the goal of providing students with internships that would help them advance their careers. We are committed to diversity and encourage applications from all qualified candidates. We offer internships in a variety of fields, including business, marketing, technology, and more. MyIntern is the perfect place to start your career. We provide you with the opportunity to learn and grow in your field, and to make a difference in the world. Apply today!<br/>

We At MyIntern Believe In Making Our Youth Especially the Students Self-Aware And Exploring The Untouched World Of Technology And Tremendous Growth-Making Fields.Lets make the most out of your career at MyIntern.
                </Col>
                <Col>
                    <img src={img}></img>
                </Col>
            </Row>
            </Container>
        </section>
    )
};

export default about;
