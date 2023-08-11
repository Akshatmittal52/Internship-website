import React,{useState} from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
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
      
        await fetch("http://localhost:3005/login/add", {
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
      
        setForm({ name: "", email: "", password: ""});
        navigate("/login");
      }
    

  return (
    
    <div className='register'>
                <h2 className='Regi'>Register</h2>
                <form onSubmit={onSubmit}>
                <input className='input1' type="text" name='name' value={form.name} onChange={(e) => updateForm({ name: e.target.value })} placeholder='Enter your name'></input>
                <input className='input1' type="text" name='email' value={form.email} onChange={(e) => updateForm({ email: e.target.value })} placeholder='Enter your email'></input>
                <input className='input1' type="password" name='password' value={form.password} onChange={(e) => updateForm({ password: e.target.value })} placeholder='Enter your password'></input>
                <button className='button1' type='submit'  >Register</button>
                </form>
            </div>
  
  );
}

export default Register