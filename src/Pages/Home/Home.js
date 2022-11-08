import React from 'react';
import Banner from './Banner/Banner';
import Playlist from './Playlist/Playlist';

const Home = () => {
    return (
        <div className='lg:px-20'>
            <Banner></Banner>
            <Playlist></Playlist>
        </div>
    );
};

export default Home;