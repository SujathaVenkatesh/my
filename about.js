import React from 'react';
import VMC from './incc/vmc';


function About(){
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home /  About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <div className="underline"></div>
                    <p>
                    Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static
                         page of plain text to complex web applications, electronic businesses, and social network services.
                    </p>
                </div>
            </section>
            {/* our vision, mission and values */ }
            <VMC />
        </div>
    )
}

export default About;