import React,{useState} from 'react';
import axios from 'axios';

function Bok(){
const [booking,setbooking]=useState("")
const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post("http://127.0.0.1:4000/data/dread",{email:event.target.elements.email.value}).then(res=>{
        if(!res.data) setbooking("no bookings found");
        else {
            const data=`email: ${res.data.email} phone number: ${res.data.number} name: ${res.data.name} 
            From: ${res.data.from} To: ${res.data.to} Departure date: ${res.data.Dep_date} 
            Arrival date: ${res.data.Ret_date} Trip: ${res.data.Round}`
            setbooking(data);
            
        }
    })
}
return(
<form action="/action_page.php" onSubmit={handleSubmit} >
          <div className="container">
            <h1>Enter Email</h1>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />
            <button type="submit" className="confirm" >Check booking</button>
            <h2>Booking Details:</h2>
            <hr/>
            <p style={{backgroundColor:"black",color:"white"}}><b>{booking}</b></p>
            </div></form>)}

export default Bok;