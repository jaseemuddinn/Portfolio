import React from 'react'

function Info() {
    return (
        <div className='bg-[#413E40]'>
            <div>
                <h1 className='text-white pt-10 font-bold text-center text-2xl md:text-5xl lg:text-7xl'>
                    Want to talk? <span className='text-gray-200 text-lg font-normal'>About any project</span>
                </h1>
                <div className='py-5 felx justify-center items-center'>
                    <a href="mailto:njaseemudin@gmail.com" className='flex justify-center items-center hover:italic'>
                        <p className='text-white'>
                            Just E-mail
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Info