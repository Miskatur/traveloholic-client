import React, { useEffect, useState } from 'react';
import IndividualReview from './IndividualReview';

const Review = ({ _id }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments?comment_id=${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [_id, comments])


    return (
        <div>

            <h1 className='my-5'>Total Comments {comments.length}</h1>
            <div className='grid grid-cols-1'>
                <div className='w-full'>
                    <table className="lg:table w-full">
                        <thead>
                            <tr>

                                <th>Reviewer</th>
                                <th>Post</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                comments.map(com => <IndividualReview
                                    key={com._id}
                                    com={com}
                                >

                                </IndividualReview>)
                            }
                        </tbody>


                    </table>
                </div>



            </div>
        </div>
    );
};

export default Review;