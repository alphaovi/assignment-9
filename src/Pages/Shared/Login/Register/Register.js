import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css";
import { useState } from 'react';
import Loading from '../../Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, UpdateProfileerror] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    };

    if (user) {
        navigate("/home");
    }

    if(loading || updating){
        <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        const success = await updateProfile({ displayName: name });
          if (success) {
            console.log('Updated profile');
          }
          navigate("/home");

    };


    return (
        <div className="register-form fullPage-margin text-primary">
            <h2 id="please-register">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="email-name" placeholder="Your Name" required />

                <input type="email" name="email" id="email-mail" placeholder="Email Address" required />

                <input type="password" name="password" id="email-password" placeholder="Password" required />

                <input onClick={() => setAgree(!agree)} className="m-2" type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "text-primary" : "text-danger"} htmlFor="terms">Accepts terms & Condition?</label> */}
                <label className={`ps-2 ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Accepts terms & Condition?</label>

                <p className="text-danger cursor-pointer mt-2">Already Have An Account? <Link to="/login" className="text-primary pe-pointer text-decoration-none" onClick={navigateToLogin}>Please Login</Link> </p>

                <Button className="mt-2" variant="primary" type="submit" disabled={!agree}>
                    Register
                </Button>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;