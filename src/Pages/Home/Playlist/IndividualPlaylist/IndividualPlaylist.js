import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const IndividualPlaylist = ({ info }) => {
    const { details, img, location, name, _id } = info
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl group hover:bg-teal-500 ">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure>
                        <img src={img} className="h-56 w-full" alt="pics" />
                    </figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body group-hover:text-white">
                <h2 className="card-title">{name}</h2>
                <h2 className='text-sm font-semibold'> Location : {location}</h2>
                <p>{
                    details.length > 100 ? details.slice(0, 100) + '...' : details
                }</p>
                <div className="card-actions justify-center mt-5">
                    <Link to={`/playlist-details/${_id}`}>
                        <button className="py-2 px-5 rounded-lg bg-emerald-400	 hover:bg-emerald-700 text-white font-semibold border-none">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndividualPlaylist;