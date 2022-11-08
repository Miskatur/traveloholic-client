import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PlaylistDetails = () => {
    const contentDetails = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(contentDetails)
    const { details, img, location, name, _id, totalCost, period } = contentDetails;

    const handleCommentBox = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        const comments = {
            comment_id: _id,
            email: user?.email,
            uid: user?.uid,
            title: name,
            comment: comment,
            photoUrl: user?.photoURL,
            name: user?.displayName
        }
        fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("You have successfully added a Review!")
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='lg:px-20 py-20'>
            <div>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div>
                        <img src={img} alt="" className='rounded-lg' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <h1 className='text-3xl font-bold'>{name}</h1>
                            <h4 className='text-lg font-semibold'>Location : {location}</h4>
                            <div className='flex justify-between items-center my-5'>
                                <p className='font-medium text-base'>Time I Spent : {period}</p>
                                <p className='font-medium text-base mr-20'>Total Cost : {totalCost}</p>
                            </div>
                            <p className='text-sm'>{details}</p>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    {
                        user?.uid ?
                            <>
                                <form onSubmit={handleCommentBox}>
                                    <div className='mx-auto border text-black rounded-lg bg-emerald-200 p-12'>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name='email' placeholder={user?.email} className="input input-bordered" readOnly />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Comment</span>
                                            </label>
                                            <textarea className="textarea h-36" placeholder="write a review..." name='comment' ></textarea>
                                        </div>

                                        <input className='btn mt-5' type="submit" value="Submit Review" />

                                    </div>
                                </form></>
                            :
                            <>
                                <p className='text-center border-2 border-red-500	 rounded-xl p-10'>Please <Link to={'/login'} className="font-semibold">Login</Link> before commenting a review.</p>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default PlaylistDetails;