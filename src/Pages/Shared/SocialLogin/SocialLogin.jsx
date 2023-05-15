import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handelSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='text-center space-y-6'>
            <div className="divider">OR</div>
            <button onClick={handelSignIn} className="btn btn-outline btn-xs btn-accent mr-6">Google</button>
            <button className="btn btn-outline btn-xs btn-accent">Github</button>
            <p className='text-xs'>Do not have an Account? <Link to='/register' className='text-orange-600'>Please Register</Link></p>
        </div>
    );
};

export default SocialLogin;