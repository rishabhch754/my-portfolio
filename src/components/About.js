import React from "react";
import "./About.css";

function About() {
    return (
        <>
            <div id="about">
                <div className="aboutUs">
                    <div className="Info">
                        <h2>About Me</h2>
                        <p>
                            Hi, I’m Rishabh Kumar, a passionate <span>web developer</span> specializing in creating responsive and interactive websites.
                            I have completed <span>BCA from GLA University</span>.
                            I enjoy turning ideas into functional, user-friendly web applications using technologies like <span>React, JavaScript, HTML, and CSS</span>.
                            Always <span className="p">eager to learn and explore new tools, I aim to contribute to innovative projects and grow as a skilled professional in the tech industry.</span>
                        </p>
                       
                            <h3 className="inf">Personal Information</h3>
                             <div className="PI">
                                <div className="My-Info">
                                    <h4><span className="a">Name :</span> Rishabh Kumar</h4>
                                    <h4><span className="a">Email :</span> <a href="mailto:rishabhch754@gmail.com">rishabhch754@gmail.com</a></h4>
                                    <h4><span className="a">Phone No :</span> 9634728358</h4>
                                </div>
                                <div className="My-Info-Sec2">
                                    <h4><span className="a">Country :</span> India</h4>
                                    <h4><span className="a">State :</span> Uttar Pradesh</h4>
                                    <h4><span className="a">City :</span> Mathura</h4>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;