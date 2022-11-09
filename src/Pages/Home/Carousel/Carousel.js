import React from 'react';

const Carousel = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl font-semibold my-12'>Whats Your Favourite Transportation?</h1>
            <div className="carousel w-screen lg:w-full h-3/4 lg:h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/B677rfF/large-Travelling-with-train-Fla-m-Torild-Moland-Travel-Stock-388b4c82-a719-4ec1-bfc2-ce3c26e9c4ad-ab.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tPzmFyy/615b6ae57b154500183d249c-width-700.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/mHYxmH7/77c2099f1b828b496c20b0879c944529.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;


