import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { setAuthToken } from '../../utilities/authentication';

const Register = () => {
    const { signUpUser, updateUser } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpUser(email, password)
            .then(res => {
                const user = res.user;
                handleUserProfile(name, photoURL)
                setAuthToken(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }

    const handleUserProfile = (name, photoURL) => {
        updateUser(name, photoURL)
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className='my-20'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center'>Register Now</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='lg:w-1/2 mx-auto border text-black rounded-lg bg-emerald-200 p-12'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn" type="submit" value="Sign Up" />
                    </div>
                    <p className='mt-5'>Already have an Account? <Link to={'/login'} className="font-semibold">Login Here</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Register;