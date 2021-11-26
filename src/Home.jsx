import React from 'react';
import web from '../src/images/img2.e981619f.svg';
import Common from './Common';

 const Home = () => {
     return (
<>
<Common 
         name="Grow Your Bussiness With"
         imgsrc={web}
         visit="/service"
         btnname="Service Now"
       />
     </>
     );
 }

export default Home;