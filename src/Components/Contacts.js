import {useState} from "react";
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../Components/Assets/img/contact-img.svg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacts = () =>{
    const form = useRef();
    // const formInitialDetails={
    //     // firstName:"",
    //     name:"",
    //     email:"",
    //     phone:"",
    //     message:"",
    // }
    // const [formDetails,setFormDetails]=useState(formInitialDetails);
    // const [buttonText,setButtonText]  = useState("Send");
    // const [status,setStatus]= useState({})

    // const onFormUpdate=(category,value)=>{
    //     setFormDetails({
    //         ...formDetails,
    //         [category] : value
    //     })
    // }

  
         const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_s6r5o3u', 'template_6csryx8', form.current, 'pVvIHo6FiFz6mphSV')

          e.target.reset()
        };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     let response = await fetch("http://localhost:5000/contact", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //       },
    //       body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = await response.json();
    //     setFormDetails(formInitialDetails);
    //     if (result.code == 200) {
    //       setStatus({ succes: true, message: 'Message sent successfully'});
    //     } else {
    //       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //     }
    //   };
    return(
        <section className="contact" id="contact">
            <Container>
                <Row  className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={sendEmail} > 
                    
                        <Row>
                            {/* <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate("firtName",e.target.value)}/>                            
                            </Col> */}
                            <Col sm={12} className="px-1">
                                <input type="text" name='name' placeholder="Name" />                            
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" name='email' placeholder="Email Address"/>                            
                            </Col> 
                            <Col sm={6} className="px-1">
                                <input type="number" name='phone' placeholder="Phone No."/>                            
                            </Col>
                            <Col>
                            <textarea row="4" name='message' placeholder="Message"/>
                            <input type="submit" value="Send"/>
                             {/* <button type="submit">Send</button> */}
                            </Col>
                            {/* {
                                status.message &&
                                <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }                            */}
                        </Row>

                    </form>

                    </Col>
                </Row>
            </Container>
        </section>



    )
}