import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateReview = () => {
    const data = useLoaderData()

    const navigate = useNavigate()
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const comments = form.comment.value;
        fetch(`https://traveloholic-server.vercel.app/comments/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ comments })
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Succesfully')
                    navigate('/myreviews')
                }
            })
    }

    return (
        <div className='my-20'>
            <div className='my-10'>
                <h1 className='text-3xl font-bold text-center'>Update Your Review</h1>
            </div>
            <form onSubmit={handleUpdate}>
                <div className='lg:w-1/2 mx-auto border text-black rounded-lg bg-emerald-200 p-12'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder={data?.email} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <textarea type="text" name='comment' placeholder="comment"
                            defaultValue={data?.comment} className="textarea h-32" />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn" type="submit" value="Update Review" />
                    </div>

                </div>
            </form>

        </div>
    );
};

export default UpdateReview;