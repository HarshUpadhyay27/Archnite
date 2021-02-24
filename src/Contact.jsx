import React, {useEffect} from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Footer from "./Footer";
import Aos from 'aos'
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    }, [])
    return (
        <>
            <main>
                <section className="contact">
                    <div className="contact-div">
                    </div>
                </section>

                <section className="contact-item">
                    <h1>Contact Us</h1>
                    <div className="main-div">
                        <div className="contact-left" data-aos="zoom-out-right">
                            <h2><LocationOnIcon /> 1600 Amphitheatre Parkway, Mountain view, CA 94043</h2>
                            <h2><PhoneIcon /> +321 123 4567</h2>
                            <h2><EmailIcon /> info@example.com</h2>
                        </div>
                        <div className="contact-right" data-aos="zoom-out-left">
                            <div className="contact-box">
                                <div className="contact-up">
                                    <input typeof="text" placeholder="Name"></input>
                                    <input typeof="email" placeholder="Email"></input>
                                </div>
                                <div className="contact-down">
                                    <input typeof="text" placeholder="Message"></input>
                                </div>
                                <button>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;