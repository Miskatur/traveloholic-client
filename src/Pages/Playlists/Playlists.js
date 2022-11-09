import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import IndividualPlaylist from '../Home/Playlist/IndividualPlaylist/IndividualPlaylist';

const Playlists = () => {
    const data = useLoaderData()
    const { setLoader } = useContext(AuthContext)
    if (data.length === 0) {
        setLoader(true)
    }
    else {
        setLoader(false)
    }
    return (
        <div className='my-20 lg:px-20'>
            <div className='text-3xl text-center font-semibold my-20'>
                Welcome To My Playlists
            </div>
            <div className='grid md-grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(info => <IndividualPlaylist
                        info={info}
                        key={info._id}
                    ></IndividualPlaylist>
                    )
                }

            </div>

        </div>
    );
};

export default Playlists;