import React from 'react';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Playlist from './Playlist/Playlist';
import Quotes from './Quotes/Quotes';

const Home = () => {
    return (
        <div className='lg:px-20'>
            <Banner></Banner>
            <Playlist></Playlist>
            <Carousel></Carousel>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;