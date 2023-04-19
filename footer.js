import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company information</h6>
                        <hr/>
                        <p className="text-white">
                        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single 
                        static page of plain text to complex web applications, electronic businesses, and social network services.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#07, chennai, Tamilnadu India.sathya</p></div>
                        <div><p className="text-white mb-1">+91 88888xxxx8</p></div>
                        <div><p className="text-white mb-1">+91 88888xxxx8</p></div>
                        <div><p className="text-white mb-1">email@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;