import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div>
        <br></br><br></br><br></br>
        <div className="project-section">
            <div className="project-title-section">
                <img id="project-title-image" src={require("../../assets/JavaLogo.png")}/>
                <h2> (Object Oriented Programming)</h2>
            </div>
            <div className="project-content-section">
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/JavaEnkalupsi.jpg")}/>
                    <div className="middle">
                    <div className="text">Encalupsation</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/JavaAbstract.png")}/>
                    <div className="middle">
                    <div className="text">Abstract</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/JavaInheritance.png")}/>
                    <div className="middle">
                    <div className="text">Inheritance</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/JavaEncryption.png")}/>
                    <div className="middle">
                    <div className="text">Encryption</div>
                    </div>
                </div>
            </div>
        </div>

        <br></br><br></br><br></br>
        <div className="project-section">
            <div className="project-title-section">
                <img id="project-title-image" src={require("../../assets/WordpressLogo.png")}/>
                <h2> (Landing Page Website)</h2>
            </div>
            <div className="project-content-section">
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/Dashboardbmswebid.png")}/>
                    <div className="middle">
                    <div className="text">Dashboard</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/Editorbmswebid.png")}/>
                    <div className="middle">
                    <div className="text">Result</div>
                    </div>
                </div>
            </div>
        </div>
    
        <br></br><br></br><br></br>
        <div className="project-section">
            <div className="project-title-section">
                <img id="project-title-image" src={require("../../assets/LaravelLogo.png")}/>
                <h2> (Website E-Commerce)</h2>
            </div>
            <div className="project-content-section">
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/WebAnvel.png")}/>
                    <div className="middle">
                    <div className="text">Homepage</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/WebRegister.png")}/>
                    <div className="middle">
                    <div className="text">Sign Up</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/WebVerify.jpg")}/>
                    <div className="middle">
                    <div className="text">Verification</div>
                    </div>
                </div>
            </div>
        </div>

        <br></br><br></br><br></br>
        <div className="project-section">
            <div className="project-title-section">
                <img id="project-title-image" src={require("../../assets/ReactLogo.png")} style={{height: "7vh",paddingtop: "3.5vh"}}/>
                <h2> (From & Blog)</h2>
            </div>
            <div className="project-content-section">
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/WebGuest.png")}/>
                    <div className="middle">
                    <div className="text">Guest Form</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/WebGuest2.png")}/>
                    <div className="middle">
                    <div className="text">Guest Form</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/BlogTitipku.png")}/>
                    <div className="middle">
                    <div className="text">Top Blog</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/BlogTitipku2.png")}/>
                    <div className="middle">
                    <div className="text">Bottom Blog</div>
                    </div>
                </div>
                <div className="image-hover-container">
                    <img className="image" src={require("../../assets/BlogTitipku3.png")}/>
                    <div className="middle">
                    <div className="text">Main Blog</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project