import React, { useEffect, useState } from 'react';
import './ShortLink.css'

const ShortLink = () => {

    const [url, setUrl] = useState([]);
    
    const inputValue = e => {
        const value = e.target.value;
        fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
            .then(res => res.json())
            .then(data => {
                setUrl(data?.result)
                console.log(data?.result)
            })
    }

    let text = document.getElementsByClassName('copy-text');
    const text2 = (text[0]?.innerText);

    return (
        <>
            <div className='p-10 bg-desk rounded-lg'>
                <div className='flex justify-between items-center'>
                    <input type="text" className='w-3/4 p-2 rounded-lg' onBlur={inputValue} />
                    <button className='py-2 px-5 rounded-lg focus:ring-2' style={{ background: 'hsl(179deg 56% 75%)' }}>Shorten It!</button>
                </div>
            </div>

            {
                url ? <div className='p-5 my-5 rounded-lg bg-white flex justify-between items-center text-lg'>
                    <p>{url?.short_link}</p>
                    <div className='flex justify-between'>
                        <p className='text-indigo-300 mr-5 copy-text'>{url?.short_link}</p>
                        <button className='py-2 px-5 rounded-lg focus:ring-2 font-bold text-white' style={{ background: '#05ebe8' }} onClick={() => navigator.clipboard.writeText(text2)} >copy</button>
                    </div>
                </div> : <div className='p-5 my-5 rounded-lg bg-white flex justify-between'>
                    <p className="copy-text">Please Type Right Link</p>
                    <button className='py-2 rounded-lg focus:ring-2 font-bold text-white' style={{ background: '#05ebe8' }}>copy</button>
                </div>
            }
        </>
    );
};

export default ShortLink;