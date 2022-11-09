import React from 'react';

const IndividualReview = ({ com }) => {

    const { comment, email, name, photoUrl, title } = com;
    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {title}
                <br />
            </td>
            <td>{comment}</td>

        </tr>




    );
};

export default IndividualReview;