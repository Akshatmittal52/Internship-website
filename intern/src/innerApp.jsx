import React from 'react'
import Navbar from './Component1/Navbar';
import Mid from './Component1/Mid';
import Wave from "./Component1/Wave";
import About from './Component2/AboutUs';
import Intern from './Component2/Internships';
import Team from './Component3/Team';
import FAQ from './Component2/FAQ';
import Contact from './Component2/Contactus';

function innerapp()
{
    return(
        <div>
        <Navbar/>
        <Mid/>
        <Wave/>
        <About/>
        <Intern/>
        <Team/>
        <FAQ />
        <Contact/>
        </div>
    )
}

export default innerapp;