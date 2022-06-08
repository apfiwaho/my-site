import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    // const [linkColor, setLinkColor] = useState('#1f2937');

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-xl z-[100]'
                    : 'fixed w-full h-20 z-[100]'
            }>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image src={require('../public/assets/navLogo.png')} alt="/" width='70' height='70' />
                </Link>
                <div >
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/resume'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>


            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden ' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image src={require('../public/assets/navLogo.png')} width='87' height='35' alt='Logo' />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                LET&apos;S BUILD SOMETHING TOGETHER
                            </p>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href={'/'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                                </Link>
                                <Link href={'/#about'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                                </Link>
                                <Link href={'/#skills'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                                </Link>
                                <Link href={'/resume'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Resume</li>
                                </Link>
                                <Link href={'/#contact'}>
                                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                                </Link>
                            </ul>
                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>
                                    Let&apos;s Connect
                                </p>
                                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                    <a
                                        href='https://www.linkedin.com/in/apfiwaho-ramukosi-45738470/'
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href='https://github.com/apfiwaho' target='_blank' rel="noreferrer">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <Link href='mailto:apfiwaho@gmail.com'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiOutlineMail />
                                        </div>
                                    </Link>
                                    <Link href='/resume'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar