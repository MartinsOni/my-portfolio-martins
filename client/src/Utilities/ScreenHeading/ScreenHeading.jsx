import React from 'react'
import "./ScreenHeading.css"

const ScreenHeading = (props) => {
  return (
    <div className='heading_container'>
        <div className="screen_heading">
            <span>{props.title}</span>
        </div>
        {
            (props.subHeading)? (
                <div className="screen_sub_heading">
                    <span>{props.subHeading}</span>
                </div>
            )
            : <div></div>
        }
        <div className="heading_separator">
            <div className="separator_line">
                <div className="separator_blob">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ScreenHeading