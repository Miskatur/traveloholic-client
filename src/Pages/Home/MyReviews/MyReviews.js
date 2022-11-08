import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${user?.email}`)
            .then(res => res.json())
            .then(data = setReviews(data))

    }, [user?.email], reviews)
    console.log(reviews)

    return (
        <div>
            <p>Reviews : {reviews?.length}</p>

        </div>
    );
};

export default MyReviews;