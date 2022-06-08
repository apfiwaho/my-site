import React from 'react';
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
    return (
        <>
            <Head>
                <title>Apfiwaho | Resume</title>
                <meta
                    name='description'
                    content='I’m a full-stack web developer specializing in building exceptional digital experiences.'
                />
                <link rel='icon' href='/fav.png' />
            </Head>

            <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
                <h2 className='text-center'>Resume</h2>
                <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
                    <h2 className='text-center'>Apfiwaho Ramukosi</h2>
                    <div className='flex'>
                        <a
                            href='https://www.linkedin.com/in/apfiwaho-ramukosi-45738470/'
                            target='_blank'
                        >
                            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
                        </a>
                        <a href='https://github.com/apfiwaho' target='_blank'>
                            <FaGithub size={20} style={{ marginRight: '1rem' }} />
                        </a>
                    </div>
                </div>
                <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
                    <p>
                        Web Development<span className='px-1'>|</span> Business Intelligence{' '}
                        <span className='px-1'>|</span> Complex Problem Solving
                    </p>
                </div>
                <p>
                    Analytical, innovative, and motivated web development professional
                    with experience in customer service and
                    organizational effectiveness in fast-paced and challenging
                    environments. Adept at developing strategies and driving streamlined
                    operations. Diverse analytical skills, team collaboration, and
                    relationship building. Consummate professional,
                    with solid interpersonal abilities and complex problem-solving skills.
                    Effective and proven track record of critical thinking,  and optimizing efficiencies.
                </p>

                {/* Skills */}
                <div className='text-center py-4'>
                    <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
                    <p className='py-2'>
                        <span className='font-bold'>Technical Skills</span>
                        <span className='px-2'>|</span>Full-Stack Web Developer
                        <span className='px-2'>|</span> HTML
                        <span className='px-2'>|</span>CSS
                        <span className='px-2'>|</span>React
                        <span className='px-2'>|</span>Tailwind
                        <span className='px-2'>|</span> Python
                        <span className='px-2'>|</span> Power BI
                        <span className='px-2'>|</span> Jupyter Notebook
                    </p>
                    <p className='py-2'>
                        <span className='font-bold'>Amazon Web Services</span>
                        <span className='px-2'>|</span>Amazon Web Services Cloud
                        Practitioner
                    </p>
                </div>

                {/* Experience */}
                <div className='py-4'>
                    <h5 className='text-center underline text-[18px] py-4'>
                        Professional Experience
                    </h5>
                    <p className='italic'>
                        <span className='font-bold'>Standardbank</span>
                        <span className='px-2'>|</span>South Africa
                    </p>
                    <p className='py-1 italic'>Insurance Banker - Business Intelligence (Current)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Using automated tools to extract data from primary and secondary sources.
                        </li>
                        <li>
                            Performing analysis to assess quality and meaning of data.
                        </li>
                        <li>
                            Preparing reports for
                            the management stating trends, patterns, and predictions using relevant data.
                        </li>
                        <li>
                            Preparing final analysis reports for the stakeholders to understand the data-analysis
                            steps, enabling them to take important decisions based on various facts and trends.
                        </li>
                    </ul>
                </div>
                {/* Experience */}
                <div className='py-4'>
                    <p className='italic'>
                        <span className='font-bold'>Turati Software</span>
                        <span className='px-2'>|</span>South Africa
                    </p>
                    <p className='py-1 italic'>Software Engineer Intern (2021 – 2022)</p>
                    <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                        <li>
                            Developing front end website architecture.
                        </li>
                        <li>
                            Developing back-end website
                            applications on AWS.
                        </li>
                        <li>
                            Ensuring cross-platform optimization for mobile phones.
                            Ensuring responsiveness of applications.
                        </li>
                        <li>
                            Working alongside graphic designers for
                            web design features.
                        </li>
                        <li>
                            Seeing through a project from conception to finished product.
                            Designing and developing APIs.
                        </li>
                        <li>
                            Meeting both technical and consumer needs.
                            Staying abreast of development in web applications and programming languages.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default resume;