import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const onSubmit = (data) => {

        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUSer = result.user;
                console.log(loggedUSer)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User Profile photo updated');
                        const saveUser = { name: data.name, email: data.email }

                        fetch('https://food-club-server-ten.vercel.appusers', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })

                                    navigate('/')

                                }
                            })


                    })
                    .catch(error => console.log(error))
            })

    }

    return (
        <>
            <Helmet>
                <title>Food Club | Sign up</title>
            </Helmet>
            <div className="hero min-h-screen flex items-center justify-center">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input input-bordered" />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input

                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="photoUrl"
                                className="input input-bordered" />
                            {errors.photoURL && <span> photoURL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                {...register("email", { required: true })}
                                placeholder="email"
                                className="input input-bordered" />
                            {errors.email && <span> Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].)/
                                })}
                                placeholder="password"
                                className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p role="alert">password is required</p>
                            )}
                            {errors.password?.type === 'minLength' && <p>
                                Password must be in 6 charecters</p>}
                            {errors.password?.type === 'maxLength' && <p>
                                Password must be less then 20 charecters</p>}
                            {errors.password?.type === 'pattern' && <p>
                                Password must include one Lowercase, one uppercase one digit and one spacial charecter</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {errors.name && <span>Name is required</span>}
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />

                        </div>
                    </form>
                    <p className="px-4"><small>All ready have an account? <Link to='/login' className="text-blue-600 font-semibold">Login</Link></small></p>
                    {/* social login  */}
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SignUp;