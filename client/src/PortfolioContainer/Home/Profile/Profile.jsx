import React from 'react'
import Typical from "react-typical"
import "./Profile.css"
import ScrollService from '../../../Utilities/ScrollService'

const Profile = () => {

    return (
        <div className='container1'>
            <div className='profile_container'>

                <div className="profile_parent">

                    <div className="profile_details">

                        <div className="profile_icon">
                            <div className="profileIcons">
                                <a href="">
                                    <i className="fa fa-facebook-square"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-twitter-square"></i>
                                </a>
                                <a href="">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className="profile_detail_name">
                            <p style={{fontSize: "30px"}}>Hello, I am <b className='name'>Martins</b> and based in Berlin</p>
                            <h1 className='info'>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "MERN stack Developer 💻", 3000,
                                        "User Interface and User Experience designer", 3000,
                                        "Fullstack Web Developer 🚀",  3000
                                    ]}
                                />
                            </h1>
                            <p className='profile_text'>I am a motivated and fresh <b>FULL-STARK WEB DEVELOPER,</b> ready to seize new
                                opportunities in this field. I enjoy using MERN, HTML, CSS, and JavaScript to build stunning
                                designs and responsive websites. I'm also proficient with Linus and GIT, an open
                                source version control system. My disciplinary origins were in Surveying and
                                Geo-informatics, and I am a committed team player. In order to apply my gained
                                tech expertise into practice, I'm now looking for a junior full stack web developer
                                position or internship.</p>
                        </div>

                        <div className="profile_option">
                            <button className="btn primary-btn"
                                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                <h6>Hire Me</h6>
                            </button>

                            <a href="Martins-CV.pdf" download="Oni Martins-CV.pdf">
                                <button className='btn highlighted-btn'>
                                    <h6>Get Resume</h6>
                                </button>
                            </a>

                        </div>

                    </div>

                    <div className="profile_picture">

                        <div className="profile_picture_background">
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile
