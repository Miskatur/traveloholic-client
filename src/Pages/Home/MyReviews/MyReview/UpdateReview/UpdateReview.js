import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const data = useLoaderData()
    console.log(data)

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const comments = form.comment.value;
        fetch(`http://localhost:5000/comments/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ comments })
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Review Updated Succesfully')
                }
            })
    }

    return (
        <div className='my-20'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center'>Login Now</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='lg:w-1/2 mx-auto border text-black rounded-lg bg-emerald-200 p-12'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder={data?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <textarea type="text" name='comment' placeholder="comment" className="input input-bordered" />
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

export default UpdateReview;