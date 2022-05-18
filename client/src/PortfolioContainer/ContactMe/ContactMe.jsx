import React, { useState } from 'react'
import Typical from "react-typical"
import axios from 'axios'
import { toast } from 'react-toastify'
import "./ContactMe.css"

import load1 from "../../../src/images/load2.gif"
import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../Utilities/ScrollService'
import Animations from '../../Utilities/Animations'




const ContactMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [banner, setBanner] = useState("")
    const [bool, setBool] = useState(false)

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    // console.log(name)
    // console.log(email)
    // console.log(message)

    const submitForm = async (event) => {

        event.preventDefault()

        try {
            const data = {
                name,
                email,
                message,
            }
            setBool(true)

            const res = await axios.post("/contact", data)
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            }
            else if (res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)

                setName("");
                setEmail("");
                setMessage("");
            }
        }
        catch (error) {
            console.log(`😲 Error, Try again`, error)
        }

    }

    return (
        <div className='main-container' id={props.id || ""}>
            <ScreenHeading
                subHeading={"Let Keep In Touch"}
                title={"Contact Me"}
            />

            <div className="central-form">
                <div className="col">
                    <h1 className='title'>
                        <Typical
                            loop={Infinity}
                            steps={[
                                "Get in Touch 📧", 3000,
                                "I am also open to collaboration 🤝", 3000
                            ]}
                        />
                    </h1>
                    <a href="#">
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

                <div className="back-form">
                    <div className="image-back">
                        <h3>Send Me An Email !</h3>
                        {/* <img src={imgBack} alt="loading failed" /> */}
                        <img src="https://www.git-tower.com/blog/assets/img/default-post-header@960w.png" alt="loading failed" />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>

                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleName} value={name} />

                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} value={email} />

                        <label htmlFor="message">Message</label>
                        <textarea name="text" id="message" cols="" rows="5" onChange={handleMessage} value={message} />

                        <div className="send-btn">
                            <button type="submit" value="Reset form">
                                Send
                                <i className="fa fa-paper-plane" />
                                {bool ? (<b className='load'>
                                    <img src={load1} alt="Img-Loading failed" />
                                </b>) : ("")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe