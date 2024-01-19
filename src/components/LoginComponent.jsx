import React from "react"
import "../Sass/LoginComponent.scss"
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI"
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function LoginComponent() {

  let navigate = useNavigate()

  const [credentials, setCredentials] = React.useState({})

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password)
      toast.success('signed in to linkedin')
      localStorage.setItem('userEmail', res.user.email)
      navigate("/home")
    } catch(err) {
      console.log(err.errors)
      toast.error('Wrong email or password')
    }
  }

  const googleSignIn = () => {
    let response = GoogleSignInAPI
    console.log(response)
  }

  return (
    <div className="login-wrapper">
      <img src='../../public/linkedinLogo.png' alt="logo" className="linkedinLogo" />

      <h1 className="heading">Login components</h1>
      <p className="sub-heading">Stay updated on your professional world</p>
      
      <div className="auth-inputs">
        <input 
        onChange={(event) =>
          setCredentials((prev) => {return {...prev, email: event.target.value}})} 
        className="common-input" 
        placeholder="email or phone"
        />
        <input 
        onChange={(event) =>
          setCredentials((prev) => {return {...prev, password: event.target.value}})}
        className="common-input"
        placeholder="password"/>
      </div>

      <button onClick={login} className="login-btn">
        Login to linkedin
      </button>

      <hr className="hr-text" data-content="or"/>
      
      <div className="google-btn-container">
        <GoogleButton onClick={googleSignIn} className="google-btn"/>
      </div>

      <p className="go-to-signup">New to Linkedin? <span className="join-now" onClick={() => navigate("/register")}>Join now</span></p>
    </div>

  )
}
