import React, {useState} from "react"
import "./login.css"
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = ({ setLoginUser}) => {

    const navigate=useNavigate();
    

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const fetchArray = async() =>{

    let response =  await fetch("http://localhost:3005/login")
    let data = await response.json()
    data=data.filter((e) => {return (e.email == user.email && e.password==user.password)  })
    if(data.length==1)
    {
        navigate('/success')
    }
    else
    {
        alert("Incorrect login")
    }
    console.log(data);
} 
   
    return (
        <div className="login">

            <h1>Login</h1>
        
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <Button onClick={fetchArray} className="button1">Login</Button>
        </div>
    )
}

export default Login