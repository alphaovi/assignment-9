import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import "./Register.css";
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    };

    if(user){
        navigate("/home");
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    };


    return (
        <div className="register-form fullPage-margin text-primary">
            <h2 id="please-register">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="email-name" placeholder="Your Name" required />

                <input type="email" name="email" id="email-mail" placeholder="Email Address" required />

                <input type="password" name="password" id="email-password" placeholder="Password" required />

                <p className="text-danger cursor-pointer">Already Have An Account? <Link to="/login" className="text-primary pe-pointer text-decoration-none" onClick={navigateToLogin}>Please Login</Link> </p>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;