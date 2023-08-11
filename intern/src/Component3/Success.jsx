import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../Images/web.jpeg';
import img2 from '../Images/app.webp';
import img3 from '../Images/cloudimage.jpeg';
import img4 from '../Images/data.jpeg';
import img5 from '../Images/graphic.jpeg';
import img6 from '../Images/ai.jpeg';
import { Link, useHref } from 'react-router-dom';
import Form from '../Component4/Form';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';




function success()
{ 
  return (
    
   <div>
    <i><h1 style={{margin:30}}>MyIntern</h1></i>
    <Container>
    <Row>
    <Col>
    
    <Card style={{ width: '20rem' ,height:'30rem'}}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Web Development</Card.Title>
        <Link to="/Form1" >Apply</Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    
    <Card style={{ width: '20rem' ,height:'30rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>App Development</Card.Title>
        
        <Link to="/Form2">Apply</Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    
    <Card style={{ width: '20rem' ,height:'30rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Cloud Computing</Card.Title>
        
        <Link to="/Form3">Apply</Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
        <Col>
        <Card style={{ width: '20rem' ,height:'30rem' }}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title>Graphic Designing</Card.Title>
        
        <Link to="/Form4">Apply</Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '20rem' ,height:'30rem' }}>
      <Card.Img variant="top" src={img6} />
      <Card.Body>
        <Card.Title>Machine Learning</Card.Title>
        
        <Link to="/Form5">Apply</Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '20rem' ,height:'30rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Database Management</Card.Title>
      
        <Link to="/Form6">Apply</Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default success;
