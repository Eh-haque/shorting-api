import React from 'react';
import illustration from '../../../images/illustration-working.svg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center py-10'>
            <div>
                <h2 className='text-6xl font-bold'>More then just shorter links</h2>
                <p className='text-gray-500 py-5'>Build your brand's recognition and get detailed<br />insights on how your links are performing.</p>
                <button className='py-2 px-5 rounded-3xl focus:ring-2' style={{ background: '#05ebe8' }}>Get Started</button>
            </div>
            <div>
                <img src={illustration} alt="" />
            </div>
        </div>
    );
};

export default Banner;