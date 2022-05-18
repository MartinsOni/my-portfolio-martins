import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'
import "./Resume.css"


const Resume = (props) => {

    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        )
    }

    const resumeBullets = [

        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ]

    const programmingSkillsDetails = [

        { skill: "Javascript", ratingPercentage: 70 },
        { skill: "HTML", ratingPercentage: 85 },
        { skill: "CSS /SASS", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 70 },
        { skill: "Bootstrap", ratingPercentage: 80 },
        { skill: "Express JS (knowledge of Pug library)", ratingPercentage: 75 },
        { skill: "Node JS", ratingPercentage: 75 },
        { skill: "NoSQL (Mongo DB /Mongoose)", ratingPercentage: 80 },
        { skill: "GIT", ratingPercentage: 80 },
        { skill: "OS (Linus/Window)", ratingPercentage: 80 },
    ]

    const projectDetails = [
        {
            title: "E-Shop Website",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "Creating an Amazon look like online shopping platform",
            subHeading: "Technology Use: React JS, CSS"
        },
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "Creating my portfolio mainly to put my coding skill into practice",
            subHeading: "Technology Use: React JS, Bootstrap, HTML, CSS "
        },
        {
            title: "Marty-tic-tac-toe",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "A game named after my daughter that can be played by children from age two ",
            subHeading: "Technology Use: Javascript, HTML, CSS"
        }
    ]

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"Digital Career Institute GmbH, Berlin "}
                subHeading={"One year training to become Fullstack Web Developer"}
                fromDate={"2021"}
                toDate={"Present"}
            />
            <ResumeHeading
                heading={"Federal Polytechnic Ado Ekiti, Nigeria"}
                subHeading={"Higher National Diploma in Surveying and Geo-informatics"}
                fromDate={"2000"}
                toDate={"2002"}
            />
            <ResumeHeading
                heading={"Federal Polytechnic Ado Ekiti, Nigeria"}
                subHeading={"National Diploma in Land Surveying"}
                fromDate={"1989"}
                toDate={"1992"}
            />
        </div>,

        //Working Experience

        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"FM-Direkt Berlin GmbH, Berlin"}
                    subHeading={"Property Manager"}
                    fromDate={"2020"}
                    toDate={"2021"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Ensured proper safety measures were observed in the company facilities on
                        project site.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Managing the Company duty roster and Supervision of all property maintenance
                    </span>

                </div>


            </div>
            <div className="experience-container">
                <ResumeHeading
                    heading={"Ekiti State Government, Nigeria"}
                    subHeading={"Survey Technician"}
                    fromDate={"1992"}
                    toDate={"2004"}
                />

                <div className="experience-description">
                    <span className="resume-description-text">
                        - Worked with other professionals like Civil Engineer and Architects..
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Participated in extension of tertiary control in Ekiti state
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Data accusation and producing survey and topographical maps for
                        construction teams
                    </span>

                </div>


            </div>

        </div>,

        /* Programming Skill */

        < div className="resume-screen-container programming-skills-container" key="programming-skills" >

            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar">

                        </div>
                    </div>
                </div>
            ))
            }
        </div >,


        <div className="resume-screen-container" key="projects">
            {projectDetails.map((projectDetails, index) => (
                <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                />
            ))}

            <p style={{fontFamily:"fantasy", fontSize:"15px"}}>🔴 Please visit my GITHUB page to see more of my projects</p>
        </div>,

        <div className="resume_screen_container" key="interests">
            <div className='hobby'>
            <ResumeHeading
                heading="Reading an Writing"
                description="I love reading history and true live story books"
            />
            <ResumeHeading
                heading="Painting"
                description="My love for painting inspire my passion for designing colorfully websites"
            />
            {/* <ResumeHeading
                heading="Computer Game"
                description="I am also a teacher"
            /> */}
            </div>
        </div>


    ]

    const handleCarousal = (index) => {
        let offsetHeight = 360
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        }
        setCarousalOffSetStyle(newCarousalOffset)
        setSelectedBulletIndex(index)
    }

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (

            <div
                onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
                key={index}>

                <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="opp,,, " />

                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }


    const getResumeScreen = () => {
        return (

            <div
                style={carousalOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className='main2'>
            <div className='resume-container screen-container' id={props.id || ""}>
                <div className="resume-content">
                    <ScreenHeading title={"Resume"} subHeading={"My formal Bio Detail"} />
                    <div className="resume-card">
                        <div className="resume-bullets">
                            <div className="bullet-container">
                                <div className="bullet-icons"></div>
                                <div className="bullets">{getBullets()}</div>
                            </div>
                        </div>
                        <div className="resume-bullet-details">{getResumeScreen()}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Resume