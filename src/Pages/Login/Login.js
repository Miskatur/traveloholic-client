import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate()

    const { signInUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                navigate('/')
            })
            .then(error => console.error(error))
    }

    return (
        <div className='my-20'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center'>Login Now</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='lg:w-1/2 mx-auto border text-black rounded-lg bg-emerald-200 p-12'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn" type="submit" value="Log In" />
                    </div>
                    <p className='mt-5'>New To This Website? <Link to={'/register'} className="font-semibold">Register Now</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Login;