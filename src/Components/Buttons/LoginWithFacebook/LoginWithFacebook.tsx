import React from 'react'
import FacebookIcon from "../../../assets/Facebookicon.png"
import "./LoginFacebook.scss"

export default function LoginWithFacebook() {
  return (
    <div>
      <div className="login-facebook-container">
        <img src={FacebookIcon} alt="" className="icon" />
        <a href=" " className="Text" > Log in with Facebook </a>
      </div>
    </div>
  )
}
