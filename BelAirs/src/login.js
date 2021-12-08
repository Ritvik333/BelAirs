import React,{useState} from 'react';
import './login.css';

import { Link,useNavigate } from 'react-router-dom';
 
function NewComponent({setdata}){
    
    const Nav=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        setdata({email: event.target.elements.email.value, number: event.target.elements.phno.value, name: event.target.elements.Name.value})
        Nav('success')
    }

    return(
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" type="text/css" href="login.css" />
        <form action="/action_page.php" onSubmit={handleSubmit}>
          <div className="container">
            <h1>Enter Details</h1>
            <p>Please fill in this form to confirm your flight booking</p>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />
            <label htmlFor="phno"><b>Mobile Number</b></label>
            <input type="number" placeholder="Enter Mobile Number" name="phno" id="phno" required />
            <label htmlFor="Name"><b>Full Name</b></label>
            <input type="name" placeholder="Enter Name" name="Name" id="Name" required />
            <hr />
            <p>By confirming your booking you agree to our <a target="_blank" href="http://https://www.etihad.com/en-in/legal/terms-and-conditions">Terms &amp; Privacy</a>.</p>
           <button type="submit" className="confirm" >Proceed to booking</button>
           {/* <Link style={{visibility:link}} to="/booking">Prooces</Link> */}
          </div>
        </form>
      </div>
    
    )
    };

export default NewComponent;