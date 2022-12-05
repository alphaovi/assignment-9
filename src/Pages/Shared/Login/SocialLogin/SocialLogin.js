import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);


    const navigate = useNavigate();
    let errorElement;

    if (error || gitHubError) {
        errorElement = <div>
            <p className="text-danger">Error: {error?.message} {gitHubError?.message}</p>
        </div>
    }
    if (loading || gitHubLoading) {
        return <p>Loading...</p>;
    }
    if (user || gitHubUser) {
        navigate("/home");
    }


    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">OR</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-primary w-50 d-block mx-auto my-2">Google Sign In
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className="btn btn-secondary w-50 d-block mx-auto my-2">Github Login
                </button>

                <button
                    className="btn btn-danger w-50 d-block mx-auto my-2">Facebook Login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;