import React from 'react';

const Quotes = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl font-semibold my-10'>Quotes About Travelling</h1>

            <div className='grid lg:grid-cols-2 gap-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-zinc"> <blockquote>
                            Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking.  <br />
                            -Steve Jobs</blockquote>
                        </article>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-zinc"> <blockquote>
                            If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. <br />
                            -Oprah Winfrey</blockquote>
                        </article>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-zinc"> <blockquote>
                            If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.
                            <br />
                            -James Cameron</blockquote>
                        </article>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <article className="card-title prose prose-stone"> <blockquote>
                            The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.
                            <br /> -Helen Keller</blockquote>
                        </article>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Quotes;