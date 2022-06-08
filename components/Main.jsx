import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto  items-center p-2 flex justify-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>{"Let's build something together"}</p>
                    <h1 className='py-4 text-gray-700'>
                        {" Hi, I'm"} <span className='text-[#5651e5]'>Apfiwaho</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I&apos;m a full-stack web developer specializing in building exeptional digital experiences.
                        Currently, I&apos;m focused on building responsive front-end web applications while learning
                        back-end technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/apfiwaho-ramukosi-45738470/'
                            target='_blank'
                            rel="noreferrer"
                        >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/apfiwaho' target='_blank' rel="noreferrer">
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <Link href='mailto:apfiwaho@gmail.com'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href='/resume'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main