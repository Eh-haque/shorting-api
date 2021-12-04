import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram, BsPinterest } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container mx-auto'>
                <div className='mx-10'>
                    <div className='grid grid-cols-5 py-5'>
                        <h3 className='text-3xl col-span-2 font-bold text-center'>Shortly</h3>

                        <div className='col-span-2'>
                            <div className='grid grid-cols-3 gap-3'>
                                <div className='flex flex-col'>
                                    <h5 className='font-bold'>Features</h5>
                                    <Link to=''>Link Shorting</Link>
                                    <Link to=''>Branded Links</Link>
                                    <Link to=''>Analytics</Link>
                                </div>
                                <div className='flex flex-col'>
                                    <h5 className='font-bold'>Resources</h5>
                                    <Link to=''>Blog</Link>
                                    <Link to=''>Developers</Link>
                                    <Link to=''>Support</Link>
                                </div>
                                <div className='flex flex-col'>
                                    <h5 className='font-bold'>Company</h5>
                                    <Link to=''>About</Link>
                                    <Link to=''>Our Team</Link>
                                    <Link to=''>Careers</Link>
                                    <Link to=''>Contacts</Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-around'>
                            <AiFillFacebook />
                            <AiOutlineTwitter />
                            <BsPinterest />
                            <BsInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;