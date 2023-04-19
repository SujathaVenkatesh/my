import React, { useState } from "react";

const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = () => {
        // Perform desired form action (e.g. send form data to server)
        // Replace the following lines with your desired form action
        console.log("Full Name: " + fullName);
        console.log("Phone Number: " + phoneNumber);
        console.log("Email Address: " + emailAddress);
        console.log("Message: " + message);
 

        // Reset form fields after submitting
        setFullName("");
        setPhoneNumber("");
        setEmailAddress("");
        setMessage("");
        alert("Form submitted successfully");
    };
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home /  Contact Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone No"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="Enter Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type Your Message...."></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100" onClick={handleFormSubmit}>Send Message</button>
                                    </div>

                                </div>
                                <div className="col-md-6 border-start">
                                    <h6 className="main heading" style={{color:'#f76c2f'}}> Address Information</h6>
                                    <div className="underline"></div>
                                    <p>
                                        #07, chennai, Tamilnadu India.sathya
                                    </p>
                                    <p>
                                        +91 88888xxxx8
                                    </p>
                                    <p>
                                        email@domain.com
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    );
}

export default ContactForm;