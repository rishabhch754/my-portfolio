import React from "react";
// import Pic from "./Pic.jpg";
import "./Home.css";
function Home() {
    return (
        <>
            <div id="Home">
                <div class="main">
                    <div class="img-sec">
                        <img src="/images/img.jpg" alt="My-Pic" />
                    </div>
                    <div class="PInfo">
                        <div class="PData">
                            <h3>Hello, My name is Rishabh Kumar</h3>
                            <h4>I am Frontend Developer</h4>
                            <p>I craft modern, responsive, and user-friendly web experiences that bring ideas to life.</p>

                            <button className="Hireme"><a href="#Contact">Get In Touch</a></button>
                            <button className="CV">
                                 <a href="/Rishabh_resumeMF.pdf" rel="noopener noreferrer" target="_blank">View Cv</a>
                            </button>
                            <button className="CVDown">
                                <a href="/Rishabh_resumeMF.pdf" download>Download Cv</a>
                            </button>
                            
                            


                        </div>

                    </div>
                </div>



            </div>
        </>
    );
}
export default Home;