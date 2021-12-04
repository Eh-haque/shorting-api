import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Advance from './Advance/Advance';
import Banner from './Banner/Banner';
import ShortLink from './ShortLink/ShortLink';
import Boost from './Boost/Boost'

const Home = () => {
    return (
        <>
            <section className='container mx-auto mt-5 mb-16'>
                <div className='mx-10'>
                    <Header />
                    <Banner />
                </div>
            </section>
            <section className='bg-gray-100'>
                <div className='container mx-auto'>
                    <div className='mx-10'>
                        <ShortLink />
                        <Advance />
                    </div>
                </div>
            </section>
            <section>
                <Boost />
                <Footer />
            </section>
        </>
    );
};

export default Home;