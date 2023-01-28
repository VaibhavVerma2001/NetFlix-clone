import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { Link } from "react-router-dom";
import './Login.scss';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { dispatch } = useContext(AuthContext);


    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
      };

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container-login">
                <form onSubmit={handleLogin}>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Enter Your email" required onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix? <Link className="linkregister" to="/register"><b>Sign up now.</b></Link>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}