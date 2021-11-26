import React from 'react';
import { NavLink } from 'react-router-dom';
 const Common = (props) => {
     return (
     <>
       <section id="header" className="d-flex align-items-center">
      <div className="container-fluid">
    <div className="row">
        <div className="col-10 mx-auto">
        <div className="row contant">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5">
                <h1>{props.name}<br /><strong className="brand
                -name"> Parth Khunt</strong></h1>
                <h6 className="my-3">
                    We Are The Team Talented Developer Making Websites.
                    <div className="mt-3">
                    <NavLink to={props.visit}className="btn btn-outline-dark" >{props.btnname}</NavLink>
                    </div>
                </h6>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt=""HomeImg/>
            </div>
            </div>

        </div>
    </div>
</div>

    </section>
     </>
     );
 }

export default Common;