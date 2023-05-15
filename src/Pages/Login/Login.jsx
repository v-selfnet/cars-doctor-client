import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext, useState } from 'react';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    // console.log('Signin', signIn)

    const location = useLocation() // 3. redirect target/clicked link/page after login

    const navigate = useNavigate(); // 5. redirect target/clicked link/page after logi


    // 4. redirect target/clicked link/page after login [set pathname]
    const from = location.state?.from?.pathname || '/';

    const [success, setSuccess] = useState(null)

    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        // signin
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login Success!')

                // JWT STATR FROM HERE
                const userEmail = { email: loggedUser.email }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userEmail)
                })
                    .then(res => res.json())
                    .then(data => {
                        // try login to check send response from server
                        console.log('JWT Response', data)
                        // set token in local storage & remove token when logout
                        localStorage.setItem('car-access-token', data.token)
                        // 6. redirect target/clicked link/page after login [navigate]
                        navigate(from, { replace: true })
                    }) // JWT END
            }) // signIn .then End
            .catch(error => {
                console.error(error.message)
            });
    } // handelSignin End

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-40">
                <div className="text-center lg:text-left w-1/2 space-y-10">
                    <img src={loginImage} alt="Login Image Loading" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
                        <form onSubmit={handleSignin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <p className='text-green-500 text-right text-xs'>{success}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <div className='text-center space-y-6'>
                            <p>or signin with</p>
                            <button className="btn btn-outline btn-xs btn-accent mr-6">Google</button>
                            <button className="btn btn-outline btn-xs btn-accent">Github</button>
                            <p className='text-xs'>Do not have an Account? <Link to='/register' className='text-orange-600'>Please Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;