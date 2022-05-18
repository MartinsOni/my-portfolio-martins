import React from 'react'
import "./Testimonial.css"
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';

const Testimonial = (props) => {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)

    }

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 1,
            },
            1000: {
                items: 3,
            }
        }
    }

    return (
        <div className='testimonial' >

            <ScreenHeading
                title={"Testimonial"}
                subHeading={"what My People Say About My Codes"}
            />
            <section className='testimonial_section' id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            className='owl_carousel'
                            id='testimonial_carousel'
                            {...options}
                        >

                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I patronized Martins🍓 and when He delivered, I honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers on time.
                                            <i className='fa fa-quote-right' />
                                        </p>

                                        <ul className='stars list-unStyled'>

                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>

                                        </ul>
                                    </div>
                                    <div className="client_info">
                                        <img style={{ borderRadius: "50%", height: "80px", width: "80px", border: "3px solid black" }}
                                            src="img/portrait.jpg"
                                            alt="img loading failed" />
                                        <div>
                                            <h4>John Jay</h4>
                                            <p>DCI Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I patronized Martins🍓 and when He delivered, I honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers on time.
                                            <i className='fa fa-quote-right' />
                                        </p>

                                        <ul className='stars list-unStyled'>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client_info">
                                        <img style={{ borderRadius: "50%", height: "80px", width: "80px", border: "3px solid black" }}
                                            src="img/portrait.jpg"
                                            alt="img loading failed" />
                                        <div>
                                            <h4>John Jay</h4>
                                            <p>DCI Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I patronized Martins🍓 and when He delivered, I honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers on time.
                                            <i className='fa fa-quote-right' />
                                        </p>

                                        <ul className='stars list-unStyled'>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                            <li className="fa fa-star">

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client_info">
                                        <img style={{ borderRadius: "50%", height: "80px", width: "80px", border: "3px solid black" }}
                                            src="img/portrait.jpg"
                                            alt="img loading failed" />
                                        <div>
                                            <h4>John Jay</h4>
                                            <p>DCI Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Testimonial