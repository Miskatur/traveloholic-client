import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyReview from './MyReview/MyReview';

const MyReviews = () => {
    const { user, loading } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user?.email])


    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure Want To Delete This Review?');
        if (proceed) {
            fetch(`http://localhost:5000/comment/${id}`, {
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
    if (loading) {
        return <h3 className='text-2xl text-center'> Loading....</h3>
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