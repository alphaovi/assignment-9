import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"
import Loading from '../../Loading/Loading';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message} </p>
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("sent mail");
        }
        else{
            toast("Please enter your email");
        }
    }

    const navigateToRegister = () => {
        navigate("/register")
    }
    return (
        <div className="fullPage-margin w-50 mx-auto">
            <h3 className="text-primary mt-2">Please Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <br />
                <p className="text-danger cursor-pointer">New to Metro Ticket? <Link to="/register" className="text-primary pe-pointer text-decoration-none" onClick={navigateToRegister}>Please Register</Link> </p>
                <p className="text-danger cursor-pointer">Forget Password? <button className="btn btn-link text-primary pe-pointer text-decoration-none" onClick={resetPassword}>Reset Password</button> </p>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;