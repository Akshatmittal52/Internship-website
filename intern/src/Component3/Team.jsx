import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import img1 from '../Images/Akshat.jpeg';
import img2 from '../Images/Prem.jpeg';
import img3 from '../Images/Aditya.jpeg';
import img4 from '../Images/Affan.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function team()
{
    return(
        <section id='team' className='team'>
        <h1 style={{color:"white",padding:50}}>Our team</h1>
        <Container>
        <Row>
        <Col>
    <Card style={{ width: '18rem' ,height:'30rem'}}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Prem Pednekar</Card.Title>
      
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>
</Col>
<Col>
    <Card style={{ width: '18rem',height:'30rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Akshat Mittal</Card.Title>
        
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>
</Col>
<Col>
    <Card style={{ width: '18rem',height:'30rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Affan Sayed</Card.Title>
        
        <Button variant="primary">Linkedin</Button>
      </Card.Body>
    </Card>
</Col>


    </Row>
    </Container>
        </section>
    );
}

export default team;
