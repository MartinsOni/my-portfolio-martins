import React from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from "../../Utilities/Animations"
import "./AboutMe.css"


const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
        description: "I have a good skill in using different User Interface and User Experience softwares to design Websites raging from MERN, HTML, CSS, BOOTSTRAP, SASS, JAVASCRIPT, etc.",

        highlights: {
            bullets: [
                "Excellent problem solving skills, able to learn fast and adapt to the needs of your team.",
                "Attentive to UI/UX details and high code quality in concept of development of interactive interfaces",
                "High desire and perseverance to make things happen and passionate about solving complex Web Development tasks.",
                "Solid understanding of medial Query as a to build a very responsive website.",
                "Building Website from scratch using MERN technology",
                "Proficient coding skills with Javascript, HTML, CSS such as SASS with high focus on responsive designs.",
                "Good written and spoken of English language (Mother tongue) and basic knowledge in German language.",
                "In-depth understanding of Cadastral and Engineering survey procedures. Proficient with different survey equipment (Digital tachometer, GPS, Digital level)",
                "Skilled in ICAO pack"
            ],

            heading: "HERE ARE MY SKILLS"
        },

    }


    // const renderHighlight = () => {
    //     SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
    //         <div className="highlight" key={i}>
    //             <div className="highlight_blob"></div>
    //             <span>{value}</span>
    //         </div>
    //     ))
    // }

    return (
        <div className='about_me_container screen_container' id={props.id || ""}>
            <div className="about_me_parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />
                <div className="about_me_card">
                    <div className="about_me_profile"></div>
                    <div className="about_me_details">
                        <span className="about_me_description">{SCREEN_CONSTANTS.description}</span>
                        <div className="about_me_highlights">
                            <div className="highlight_heading">
                                <p className='highlight_heading_p'>{SCREEN_CONSTANTS.highlights.heading}</p>
                                {SCREEN_CONSTANTS.highlights.bullets.map((element, index) => {
                                    return <p key={index} className='highlight' > 🔴  {element}</p>
                                })}
                            </div>
                            {/* {renderHighlight()} */}
                            <div className="about_me_options">
                                <button className="btn primary-btn"
                                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                    <h6>Hire Me</h6>
                                </button>

                                <a href="CV-Martins.pdf" download="Martins CV-Martins.pdf">
                                    <button className='btn highlighted-btn'>
                                        <h6>Get Resume</h6>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe