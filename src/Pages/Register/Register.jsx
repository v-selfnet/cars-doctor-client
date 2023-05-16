import registerImage from '../../assets/images/login/login.svg';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    // console.log('Register', createUser)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        // register
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                form.reset();
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-40">
                <div className="text-center lg:text-left w-1/2 space-y-10">
                    <img src={registerImage} alt="Login Image Loading" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-6">Register</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo link imgBB" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='text-xs'>Do not have an Account? <Link to='/login' className='text-orange-600'>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;