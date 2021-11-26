import React, {useState} from 'react'
 const Contact = () => {
     const [data, setdata] = useState({
         name:"",
         number:"",
         email:"",
         msg:"",
     });

     const InputEvent = (e) => {
         const { name , value } = e.target; 
         setdata((oldval) => {
             return{
                 ...oldval,
                 [name] : value,
             }       
            })
    }
    const fromsubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My mobile number is ${data.number} and email is ${data.email}, Here is What I watn to say ${data.msg}...`);
        setdata({
            name:"",
            number:"",
            email:"",
            msg:"",
        })
    }



     return (
     <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us...</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={fromsubmit}>
                <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter Your Name:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" 
                        value={data.name}
                        name="name"
                        onChange={InputEvent}
                        placeholder="Enter Your Name..." />
                </div>
                <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone Number:</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" 
                        value={data.number}
                        name="number"
                        onChange={InputEvent}
                        placeholder="Enter Your Number" />
                </div>
                <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" 
                        value={data.email}
                        name="email"
                        onChange={InputEvent}
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={data.msg}
                        name="msg"
                        onChange={InputEvent}></textarea>
                </div>
                <div class="col-12">
                       <button className="btn btn-outline-dark" type="submit">Submit form</button>
                </div>

                </form>
            </div>
            </div>
        </div>
     </>
     );
 }

export default Contact;