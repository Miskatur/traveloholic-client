import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault()
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
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="photo url" className="input input-bordered" />
                    </div>
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
                        <input className="btn" type="submit" value="Sign Up" />
                    </div>
                    <p className='mt-5'>Already have an Account? <Link to={'/login'}>Login Here</Link></p>
                </div>
            </form>

        </div>
    );
};

export default Register;