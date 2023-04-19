import React from 'react';
import Slider  from '../inc/slider';
import {Link} from 'react-router-dom';
import VMC from './incc/vmc';
import services1 from '../images/download.jpg';
function Home(){
    return (
        <div>
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static
                         page of plain text to complex web applications, electronic businesses, and social network services.</p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                        
                    </div>
            
                </div>
            </section>

            {/* our vision, mission and values */ }
            <VMC />

            {/* Our Services */ }
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                            
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={services1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6> 

                                    <div className="underline"></div>
                                        <p>
                                        Web development is the work involved in developing a website for the Internet
                                        </p>
                                        <Link to="services" className="btn btn-link">Read More</Link>                          
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={services1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6> 

                                    <div className="underline"></div>
                                        <p>
                                        Web development is the work involved in developing a website for the Internet
                                        </p>
                                        <Link to="services" className="btn btn-link">Read More</Link>                          
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={services1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                    <h6>Services 1</h6> 

                                    <div className="underline"></div>
                                        <p>
                                        Web development is the work involved in developing a website for the Internet
                                        </p>
                                        <Link to="services" className="btn btn-link">Read More</Link>                          
                                </div>
                            </div> 
                        </div>
                    </div>       
                </div>
            </section>
        </div>
    );
}

export default Home;