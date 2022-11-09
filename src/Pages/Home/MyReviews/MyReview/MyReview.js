import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReview = ({ review, handleDelete, user, handleUpdate
}) => {
    const { comment, email, name, photoUrl, title, _id } = review;
    //     const handleUpdate = (event) => {
    //         event.preventDefault()
    //         const form = event.target;
    //         const comments = form.comment.value;
    //         fetch(`http://localhost:5000/comments/${_id}`, {
    //             method: 'PATCH',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ comments })
    //         })
    //             .then(res => res.json())
    //             .then(data => {

    //                 console.log(data)
    //                 if (data.modifiedCount > 0) {
    //                     alert('Comment Updated Successfully!')
    //                 }
    //             })
    // }



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
                <Link to={`/edit-review/${_id}`}>
                    <button>
                        <FaEdit className=' text-xl ml-3 ' />
                    </button>
                </Link>


            </div>

        </div >
    );
};

export default MyReview;