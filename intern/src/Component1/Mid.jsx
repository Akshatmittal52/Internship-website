import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './Styles.css'
import Button from 'react-bootstrap/Button';

function mid()
{
    return(
        <div className='mid'>
        <h1 className='text'>Build Your Career Here!!</h1>
        <h3>You Have A Dream. We Have A Team To Achieve it</h3>
        <Button style={{width:250,marginTop:20}}  variant="light">Get Started</Button>{' '}
        
        </div>
    )
}

export default mid;