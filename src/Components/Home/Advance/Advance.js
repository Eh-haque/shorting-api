import React from 'react';
import img1 from '../../../images/icon-brand-recognition.svg'

const Advance = () => {
    return (
        <div className='pt-10 pb-32'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with<br />our advanced statistics dashboard.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-x-8 gap-y-4 mt-10 relative'>
                <div className='p-5 rounded relative bg-white'>
                    <div className='absolute -top-14 p-5 rounded-full' style={{ background: '#3a3053' }}>
                        <img src={img1} alt="" />
                    </div>
                    <h4 className='text-xl font-bold py-5'>Brand Recognition</h4>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='p-5 rounded relative bg-white top-10'>
                    <div className='absolute -top-10 p-5 rounded-full' style={{ background: '#3a3053' }}>
                        <img src={img1} alt="" />
                    </div>
                    <h4 className='text-xl font-bold py-5'>Brand Recognition</h4>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <div className='p-5 rounded relative bg-white top-20'>
                    <div className='absolute -top-10 p-5 rounded-full' style={{ background: '#3a3053' }}>
                        <img src={img1} alt="" />
                    </div>
                    <h4 className='text-xl font-bold py-5'>Brand Recognition</h4>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
            </div>
        </div>
    );
};

export default Advance;