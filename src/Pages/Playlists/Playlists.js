import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useSetTitle from '../../Hooks/useSetTitle';
import IndividualPlaylist from '../Home/Playlist/IndividualPlaylist/IndividualPlaylist';

const Playlists = () => {
    useSetTitle('PlayList')
    const data = useLoaderData()

    return (
        <div className='my-20 lg:px-20'>
            <div className='text-3xl text-center font-semibold my-20'>
                Welcome To My Playlists
            </div>
            {
                data.length === 0 ?
                    <progress className="progress w-full"></progress> :
                    <div className='grid md-grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data.map(info => <IndividualPlaylist
                                info={info}
                                key={info._id}
                            ></IndividualPlaylist>
                            )
                        }

                    </div>
            }

        </div>
    );
};

export default Playlists;