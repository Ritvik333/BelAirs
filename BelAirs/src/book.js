import React from 'react';
import axios from 'axios';
import './book.css';
import { Link } from 'react-router-dom';
function Book({data}){

  const handlesubmit2=(event)=>{
    event.preventDefault();
    const logindata={from:event.target.elements.from.value,to:event.target.elements.to.value, Dep_date:event.target.elements.departure.value, Ret_date:event.target.elements.return.value,Round:event.target.elements.trip.value,...data}
    axios.post("http://127.0.0.1:4000/data/dread",logindata).then(res=>{
      if(!res.data) axios.post("http://127.0.0.1:4000/data/dwrite",logindata)
      else console.log("User exists")
    })
    
}

      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Flight - Travel and Tour</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="book.css" />
          {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="css/fontAwesome.css" />
          <link rel="stylesheet" href="css/hero-slider.css" />
          <link rel="stylesheet" href="css/owl-carousel.css" />
          <link rel="stylesheet" href="css/datepicker.css" />
          <link rel="stylesheet" href="css/tooplate-style.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" /> */}
          <section className="banner" id="top">
            <div id="cont">
              <div className="row">
                <div>
                  <div>
                  
                  </div>
                </div>
                <div style={{alignItems: 'center'}} id="main">
                  <section>
                    <div>
                      <div>
                        <h3>Search flights :</h3>
                        <fieldset>
                          <div>
                            <form id="form-submit" onSubmit={handlesubmit2}>
                              <div>
                                <div>                      
                                    <select id='t2' required name="from">
                                      <option value>From</option>
                                      <option value="Cambodia">Cambodia</option>
                                      <option value="Hong Kong">Hong Kong</option>
                                      <option value="India">India</option>
                                      <option value="Japan">Japan</option>
                                      <option value="Korea">Korea</option>
                                      <option value="Laos">Laos</option>
                                      <option value="Myanmar">Myanmar</option>
                                      <option value="Singapore">Singapore</option>
                                      <option value="Thailand">Thailand</option>
                                      <option value="Vietnam">Vietnam</option>
                                    </select>

                                    <select id='t3' required name="to">
                                      <option value>To</option>
                                      <option value="Cambodia">Cambodia</option>
                                      <option value="Hong Kong">Hong Kong</option>
                                      <option value="India">India</option>
                                      <option value="Japan">Japan</option>
                                      <option value="Korea">Korea</option>
                                      <option value="Laos">Laos</option>
                                      <option value="Myanmar">Myanmar</option>
                                      <option value="Singapore">Singapore</option>
                                      <option value="Thailand">Thailand</option>
                                      <option value="Vietnam">Vietnam</option>
                                    </select>

                                </div>
                                <div>
                                  <div>
                                    <label id='dlb' htmlFor="departure">Departure date:</label>
                                    <label id='dlb2' htmlFor="return">Return date:</label>
                                  </div>
                                  <div>
                                    <input  name="departure" type="date" id='dt' placeholder="Select date..." required />

                                    <input  name="return" type="date" id='dt2' placeholder="Select date..." required />
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <div>
                                      <div>
                                        <h4>Select type of trip: </h4>
                                        <input type="radio" name="trip" id="round" defaultValue="round" required="required" onchange="this.form.()" />
                                        <label id='rl' htmlFor="round">Round</label>
                                      
                                        <input type="radio" name="trip" id="oneway" defaultValue="one-way" required="required" onchange="this.form.()" />
                                        <label id='rl2' htmlFor="oneway">Oneway</label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">

                                    <button type="submit" id="fsubmit" className="btn">Order Ticket</button>
                                 <Link to="/" >  <button type="submit" id="fsubmit" className="btn">Back to home</button></Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
         
        </div>
      );
    }
  
export default Book;