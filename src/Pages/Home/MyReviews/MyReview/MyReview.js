import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyReview = ({ review, handleDelete }) => {
    const { comment, email, name, photoUrl, title, _id } = review;



    return (
        <div className='my-5 grid lg:grid-cols-4 gap-x-20 border-2 py-5 lg:pl-20'>
            <div className='flex items-center justify-left'>
                <img src={photoUrl} className="h-14 w-14 rounded-full " alt="" />
                <div className='ml-4'>
                    <h3 className='text-sm font-semibold'>{name}</h3>
                    <p className='text-sm font-medium'>{email}</p>
                </div>
            </div>
            <div className='ml-10'>
                <span className='font-semibold'>Title:</span> <br />
                {title}
            </div>
            <div>
                <span className='font-semibold'>Review:</span> <br />
                {comment}
            </div>
            <div className='flex justify-center items-center '>
                <button onClick={() => handleDelete(_id)}><FaTrashAlt className='text-red-500 text-xl' /></button>
            </div>
        </div>
    );
};

export default MyReview;