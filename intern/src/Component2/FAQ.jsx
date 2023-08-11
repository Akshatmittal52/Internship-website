import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Styles.css';
import img from '../Images/faq.jpeg';

function faq()
{
    return (
        <section id='FAQ'>
            <h1>Do you have any queries</h1>
            <Container>
<Row>
<Col className='faq'>
            
    <Accordion>
      <Accordion.Item eventKey="0" defaultActiveKey="0" flush>
        <Accordion.Header className='header' >How To Apply For Internships?</Accordion.Header>
        <Accordion.Body>
        To Apply For Upcoming Batch Of Internship You Need To Fill The Interest Form In Thst Specific Domain, After That You Will Directly Receive The Selection Certificate From Us If Selected.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>I Have Completed All The Necessary Steps, Whats Next?</Accordion.Header>
        <Accordion.Body>
        If You Have Filled All The Required Field In Interest Form Correctly, You Will Receive A Selection Certificate From Us Before Your Internship Starts. All Importent Information And Anouncements Related To Internship Are Communicated Through The Discussion From OASIS INFOBYTE Network On Linkedin.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>What Will Be The Duration Of Internship?</Accordion.Header>
        <Accordion.Body>
        In Every Domain Duration Of Internship Is 4 Weeks.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>I Have Completed My Tasks Well Before Deadline.When Will I Get A Certificate?</Accordion.Header>
        <Accordion.Body>
        You Can Submit Your Task Through Task Submission Form If You Have Received It Or Wait For It To Be Shared. If You Have Submitted The Task Before The Deadline Please Expect Your Completion Certificate In The 1st Week Of Next Month.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>What if I fail to complete the tasks?</Accordion.Header>
        <Accordion.Body>
        If you fail to submit the task you wont get the certificate. You can apply in the next month fot the certificate.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion> 
   </Col>
   <Col>
    <img className='faqimage' src={img} ></img>
   </Col>
    </Row>
    </Container>
        </section>
    )
}

export default faq;