import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                        About
                    </p>
                    <h2 className='py-4'>Who am I</h2>
                    {/* <p className='py-2 text-gray-600'>I am not your average developer.</p> */}
                    <p className='py-2 text-gray-600'>I am a passionate freelance developer with extensive skills in web-based applications development. My specialization is in Front-End, and Back-end development. I am also a Business Intelligence Analyst in the banking industry, giving insights on insurance.</p>
                    <p className='py-2 text-gray-600'>I believe that through dedication and hard work you can achieve your dreams as well as your goals for the future. As a motivated individual I want to obtain a responsible and challenging position within a dynamic company where my knowledge of both theoretical and practical aspects will be fully utilized, while gaining a valuable experience that will allow me to grow as an individual as well as an employee. My goal is always to ensure that I have a high quality standard of work that will benefit my client.</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300'>
                    <img className='rounded-xl' src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About