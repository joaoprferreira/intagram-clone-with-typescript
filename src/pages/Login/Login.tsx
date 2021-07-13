import InstagramLogo from "../../assets/Instagram-logo.png";
import ForgotPassword from "../../Components/ForgotPassword/lembrarSenha"
import ButtonLogin from "../../Components/Buttons/ButtonLogin/ButtonLogin";
import LoginWithFacebook from "../../Components/Buttons/LoginWithFacebook/LoginWithFacebook";
import SingnUp from "../../Components/SignUp/SingnUp";
import "./LoginStyle.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className='logo-container'>
        <img src={InstagramLogo} alt="" />
      </div>

      <div className="form-login">
        <input type="text" placeholder="Telefone, nome de usuário ou email" className="input-email" />
        <input type="password" placeholder="Password" className="input-senha" />
      </div>
      <ForgotPassword />

      <ButtonLogin />

      <LoginWithFacebook />

        <div className="separador">OR</div>

      <SingnUp />
      <div className="footer">
        <p> Instagram of Facebook </p>
      </div>
    </div>
  )
}
