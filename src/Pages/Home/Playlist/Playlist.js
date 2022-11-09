import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IndividualPlaylist from './IndividualPlaylist/IndividualPlaylist';

const Playlist = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://traveloholic-server.vercel.app/playlist`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='mb-20'>
            <div>
                <h1 className='text-center text-4xl font-semibold my-12'>Trending Travel Video Playlists</h1>
            </div>
            {
                data?.length === 0 ?
                    <progress className="progress w-full"></progress> :
                    <div className='grid md-grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data.map(info => <IndividualPlaylist
                                key={info._id}
                                info={info}
                            ></IndividualPlaylist>)
                        }

                    </div>
            }

            <div className='flex justify-center items-center my-20'>
                <Link to={'/playlists'}><button className='btn bg-emerald-500	 hover:bg-emerald-700 text-white font-semibold border-none'>See All</button></Link>
            </div>

        </div>
    );
};

export default Playlist;