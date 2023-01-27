import './Register.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';

function Register() {
    const [isEmail, setIsEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitEmail = () => {
        setIsEmail(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted successfully");
    }

    console.log("email is : ", email);
    console.log("password is : ", password);

    return (
        <div className='register'>
            <div className="top">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Button className="loginButton">Sign In</Button>
            </div>

            <div className="register-container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {!isEmail ? (
                    <div className='input'>
                        <input
                            type="email" required
                            placeholder="Email address"
                            className=""
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Button className="registerButton" onClick={handleSubmitEmail}>Get Started</Button>

                    </div>
                ) : (
                    <form className='input' onSubmit={handleSubmit}>
                        <input
                            type="password" required
                            placeholder="Set password"
                            className=""
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button className="registerButton" type="submit">
                            Start
                        </Button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
