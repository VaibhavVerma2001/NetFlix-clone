import './Register.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [isEmail, setIsEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);

    const handleSubmitEmail = () => {
        setIsEmail(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Form submitted successfully");
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                email: email,
                password: password,
                username: username
            });
            // console.log(res.data);
            const data = res.data;
            if (data.success){
                // console.log(data.user);
                navigate('/login');
            }
        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

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
                        <Button className="registerButton" onClick={handleSubmitEmail} disabled={email.length === 0}>Get Started</Button>
                    </div>
                ) : (
                    <form className='input' onSubmit={handleSubmit}>
                        <input
                            type="text" required
                            placeholder="Username"
                            className=""
                            onChange={e => setUsername(e.target.value)}
                        />
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
                {error? (
                    <div className='error'>
                        <p >Username or email already exists.</p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Register
