import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const [disableLogin, setDisableLogin] = useState(true)
    const { signIn } = useContext(AuthContext)
    // navigate user 
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    // captcha 
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: 'User Login Sucessfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })

                navigate(from, { replace: true });
            })
            .catch(error => {

                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }
    const handeleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        if (validateCaptcha(user_captcha_value) == true) {
            setDisableLogin(false)
            alert('Captcha Matched');
        }

        else {
            alert('Captcha Does Not Match');
            setDisableLogin(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>Food Club | Login</title>
            </Helmet>
            <div className="hero min-h-screen flex justify-center items-center">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* capthch  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Captcha</span>
                            </label>

                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handeleValidateCaptcha} name='captcha' type="text" placeholder="captcha" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">

                            {/* <input disabled={disableLogin} className="btn btn-primary" type="submit" value="Login" /> */}
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>

                    <p className='px-4'><small>New Here? <Link to='/signup' className='text-blue-600'>Create an account</Link></small></p>
                    {/* social login  */}
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;