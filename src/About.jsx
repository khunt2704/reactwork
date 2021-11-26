import React from 'react';
import web from '../src/images/hero-img.619f0cc8.png';
import Common from './Common';
 const About = () => {
     return (
     <>
       <Common 
         name="Welcome to About page"
         imgsrc={web}
         visit="/contact"
         btnname="Contact Now"
       />
     </>
     );
 }

export default About;