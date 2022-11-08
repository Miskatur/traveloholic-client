import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyReview from './MyReview/MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
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
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
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