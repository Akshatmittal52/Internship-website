import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import img1 from "../Images/webdev.png";
import img2 from "../Images/appdev.jpeg";
import img3 from "../Images/ml.jpeg";
import img4 from "../Images/cloud.jpeg";
import img5 from "../Images/data.webp";
import img6 from "../Images/graphic.jpeg";
import Button from 'react-bootstrap/Button';

function intern()
{
    return(
        <section id='internships'>
            <Container>
            <h1> Our Internships</h1>
                <Row>
                    <Col>
                   
                    <img className='img1' src={img1} ></img>
                    </Col>
                    <Col>
                   
                        <h2 className='h2'>Web Development</h2>
                       <p>The Web Development Internship Offers Practical Work Experience And An Introduction To Creating And Improving Web-Based Systems. This Internship Will Involve Challenging Opportunities, Real World Projects. It’s A Fantastic Opportunity To Gain Hands-On Experience In The Web Development Field.</p> 
                       <Button href='/register' className='button' variant="info">Apply</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                        <h2 className='h2'>App Development </h2>
                      <p> Android Is An Open Source Operating For Mobile Application Development.Now A Days People Continuously Shifting To Mobile Devices To Access Internet Application And Other Important Tasks.Which Is More Easy Than To Work On PC.It It Best Choice To Getting Started Your First App With MyIntern.</p>
                      <Button href='/register' className='button' variant="info">Apply</Button>{' '}
                    </Col>
                    <Col>
                        <img src={img2}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={img3}></img>
                    </Col>
                    <Col>
                   <h2 className='h2'> Machine learning</h2>
                   <p> Remote Machine Learning Internships Are A Unique Chance To Gain Experience In The Midst Of The Virtual Workforce While Remaining Immersed In One Of The Top Organizations In The Field. Machine Learning Internships Are Some Of The Most Competitive And Popular Within The Broader Machine learning Field.</p>
                   <Button href='/register' className='button' variant="info">Apply</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                        <h2 className='h2'>Cloud Computing </h2>
                      <p> We Offers, Cloud Computing Internship . Cloud Internship – Provides You An In-Depth Knowledge On Cloud Computing. This Cloud Computing Internship For Freshers , Enables The Students To Understand And Learn The Current Trend In The Job Market. Students Will Prefer Cloud Computing Training To Build Their Profile For Their Jobs And Also For Their Higher Studies.</p> 
                      <Button href='/register' className='button' variant="info">Apply</Button>{' '}
                    </Col>
                    <Col>
                        <img src={img4}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <img src={img5}></img>
                    </Col>
                    <Col>
                   <h2 className='h2'> Database Management</h2>
                  <p> The average database internship salary is $84,906. The most common degree is a bachelor's degree degree with an computer science major.Database thus is very important if you are majoring in Computer Science. Gain practical experience in the respective with our internships.</p>
                  <Button href='/register' className='button' variant="info">Apply</Button>{' '}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                        <h2 className='h2'>Graphic Design </h2>
                     <p>With A Graphic Design Internship, You Will Be Involved In Projects That Focus On Nearly Every Aspect Of A Business’s Visual Design Strategies. Your Internship Tasks May Include Creating Graphic And Video Content, Template Design, Web Design Work, And Many More Exciting Tasks. Plus Our Graphic Design Internships Range In Industries, So We Work With You To Find One That Best Matches Your Career Goals.</p>   
                     <Button  href='/register' className='button' variant="info">Apply</Button>{' '}
                    </Col>
                    <Col>
                        <img src={img6}></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default intern;