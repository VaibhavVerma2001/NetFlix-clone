import "./Login.scss";
import { useState} from 'react';
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username: email,
                password: password
            });
            const data = res.data;
            console.log(data);
            window.localStorage.setItem("login",true);

        } catch (error) {
            console.log(error);
        }
    }

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
                        New to Netflix? <b>Sign up now.</b>
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