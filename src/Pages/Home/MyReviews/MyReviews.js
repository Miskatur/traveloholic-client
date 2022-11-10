import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useSetTitle from '../../../Hooks/useSetTitle';
import MyReview from './MyReview/MyReview';

const MyReviews = () => {
    useSetTitle('My Reviews')
    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://traveloholic-server.vercel.app/comment?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('token')
                    return logOut()

                }

                return res.json()
            })
            .then(data => setReviews(data))

    }, [user?.email, logOut])


    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure Want To Delete This Review?');
        if (proceed) {
            fetch(`https://traveloholic-server.vercel.app/comment/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    return (
        <div className='lg:px-20'>
            {
                reviews?.length > 0 ?
                    <div className='my-20'>
                        {
                            reviews.map(review => <MyReview
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                user={user}
                            ></MyReview>)
                        }
                    </div>
                    :
                    <p className='text-center my-20'>You haven't review anything yet. Please Review!</p>
            }

        </div>
    );
};

export default MyReviews;