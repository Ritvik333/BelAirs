import React from 'react';
import axios from 'axios';
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
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="css/fontAwesome.css" />
          <link rel="stylesheet" href="css/hero-slider.css" />
          <link rel="stylesheet" href="css/owl-carousel.css" />
          <link rel="stylesheet" href="css/datepicker.css" />
          <link rel="stylesheet" href="css/tooplate-style.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" /> 
          <section className="banner" id="top">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="left-side">
                    <div className="logo">
                      <img src="img/logo.png" alt="Flight Template" />
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-md-offset-1" style={{alignItems: 'center'}}>
                  <section id="first-tab-group" className="tabgroup">
                    <div id="tab1">
                      <div className="submit-form">
                        <h4>Check availability for <em>direction</em>:</h4>
                        <form id="form-submit" onSubmit={handlesubmit2}>
                          <div className="row">
                            <div className="col-md-6">
                              <fieldset>
                                <label htmlFor="from">From:</label>
                                <select required name="from">
                                  <option value>Select a location...</option>
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
                              </fieldset>
                            </div>
                            <div className="col-md-6">
                              <fieldset>
                                <label htmlFor="to">To:</label>
                                <select required name="to">
                                  <option value>Select a location...</option>
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
                              </fieldset>
                            </div>
                            <div className="col-md-6">
                              <fieldset>
                                <label htmlFor="departure">Departure date:</label>
                                <input name="departure" type="date" className="form-control date" id="deparure" placeholder="Select date..." required />
                              </fieldset>
                            </div>
                            <div className="col-md-6">
                              <fieldset>
                                <label htmlFor="return">Return date:</label>
                                <input name="return" type="date" className="form-control date" id="return" placeholder="Select date..." required />
                              </fieldset>
                            </div>
                            <div className="col-md-6">
                              <div className="radio-select">
                                <div className="row">
                                  <div className="col-md-6 col-sm-6 col-xs-6">
                                    <label htmlFor="round">Round</label>
                                    <input type="radio" name="trip" id="round" defaultValue="round" required="required" onchange="this.form.()" />
                                  </div>
                                  <div className="col-md-6 col-sm-6 col-xs-6">
                                    <label htmlFor="oneway">Oneway</label>
                                    <input type="radio" name="trip" id="oneway" defaultValue="one-way" required="required" onchange="this.form.()" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <fieldset>
                                <button type="submit" id="form-submit" className="btn">Order Ticket Now</button>
                                <Link to="/"><button type="submit" id="form-submit" className="btn">Back to Home</button></Link>


                              </fieldset>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <div className="tabs-content" id="weather">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Check Weather For 5 NEXT Days</h2>
                  </div>
                </div>
                <div className="wrapper">
                  <div className="col-md-12">
                    <div className="weather-content">
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="tabs clearfix" data-tabgroup="second-tab-group">
                            <li><a href="#monday" className="active">Monday</a></li>
                            <li><a href="#tuesday">Tuesday</a></li>
                            <li><a href="#wednesday">Wednesday</a></li>
                            <li><a href="#thursday">Thursday</a></li>
                            <li><a href="#friday">Friday</a></li>
                          </ul>    
                        </div>
                        <div className="col-md-12">
                          <section id="second-tab-group" className="weathergroup">
                            <div id="monday">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Myanmar</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-03.png" alt="" />
                                    </div>
                                    <span>32°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>26°</span></li>
                                      <li>12PM <span>32°</span></li>
                                      <li>6PM <span>28°</span></li>
                                      <li>12AM <span>22°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Thailand</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-02.png" alt="" />
                                    </div>
                                    <span>28°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>20°</span></li>
                                      <li>12PM <span>28°</span></li>
                                      <li>6PM <span>26°</span></li>
                                      <li>12AM <span>18°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>India</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-01.png" alt="" />
                                    </div>
                                    <span>33°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>26°</span></li>
                                      <li>12PM <span>33°</span></li>
                                      <li>6PM <span>29°</span></li>
                                      <li>12AM <span>27°</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="tuesday">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Myanmar</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-02.png" alt="" />
                                    </div>
                                    <span>28°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>18°</span></li>
                                      <li>12PM <span>27°</span></li>
                                      <li>6PM <span>25°</span></li>
                                      <li>12AM <span>17°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Thailand</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-03.png" alt="" />
                                    </div>
                                    <span>31°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>19°</span></li>
                                      <li>12PM <span>28°</span></li>
                                      <li>6PM <span>22°</span></li>
                                      <li>12AM <span>18°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>India</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-01.png" alt="" />
                                    </div>
                                    <span>26°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>19°</span></li>
                                      <li>12PM <span>26°</span></li>
                                      <li>6PM <span>22°</span></li>
                                      <li>12AM <span>20°</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="wednesday">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Myanmar</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-03.png" alt="" />
                                    </div>
                                    <span>31°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>19°</span></li>
                                      <li>12PM <span>28°</span></li>
                                      <li>6PM <span>22°</span></li>
                                      <li>12AM <span>18°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Thailand</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-01.png" alt="" />
                                    </div>
                                    <span>34°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>28°</span></li>
                                      <li>12PM <span>34°</span></li>
                                      <li>6PM <span>30°</span></li>
                                      <li>12AM <span>29°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>India</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-02.png" alt="" />
                                    </div>
                                    <span>28°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>18°</span></li>
                                      <li>12PM <span>27°</span></li>
                                      <li>6PM <span>25°</span></li>
                                      <li>12AM <span>17°</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="thursday">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Myanmar</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-01.png" alt="" />
                                    </div>
                                    <span>27°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>21°</span></li>
                                      <li>12PM <span>27°</span></li>
                                      <li>6PM <span>22°</span></li>
                                      <li>12AM <span>18°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Thailand</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-02.png" alt="" />
                                    </div>
                                    <span>28°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>18°</span></li>
                                      <li>12PM <span>27°</span></li>
                                      <li>6PM <span>25°</span></li>
                                      <li>12AM <span>17°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>India</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-03.png" alt="" />
                                    </div>
                                    <span>31°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>19°</span></li>
                                      <li>12PM <span>28°</span></li>
                                      <li>6PM <span>22°</span></li>
                                      <li>12AM <span>18°</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="friday">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Myanmar</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-03.png" alt="" />
                                    </div>
                                    <span>33°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>28°</span></li>
                                      <li>12PM <span>33°</span></li>
                                      <li>6PM <span>29°</span></li>
                                      <li>12AM <span>27°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>Thailand</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-02.png" alt="" />
                                    </div>
                                    <span>31°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>24°</span></li>
                                      <li>12PM <span>31°</span></li>
                                      <li>6PM <span>26°</span></li>
                                      <li>12AM <span>23°</span></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="weather-item">
                                    <h6>India</h6>
                                    <div className="weather-icon">
                                      <img src="img/weather-icon-01.png" alt="" />
                                    </div>
                                    <span>28°C</span>
                                    <ul className="time-weather">
                                      <li>6AM <span>24°</span></li>
                                      <li>12PM <span>28°</span></li>
                                      <li>6PM <span>26°</span></li>
                                      <li>12AM <span>22°</span></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <div class="primary-button">
                          <a href="#" class="scroll-top">Back To Top</a>
                      </div>  */}
                </div>
                {/* <div class="col-md-12">
                      <ul class="social-icons">
                          <li><a href="https://www.facebook.com/tooplate"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i class="fa fa-rss"></i></a></li>
                          <li><a href="#"><i class="fa fa-behance"></i></a></li>
                      </ul>
                  </div> */}
                {/* <div class="col-md-12">
                      <p>Copyright &copy; suyash
                  
                  | Design: <a href="#" target="_parent"><em>suyash</em></a></p>
                  </div> */}
              </div>
            </div>
          </footer> 
        </div>
      );
    }
  
export default Book;