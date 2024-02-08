import mailIcon from '../../assets/mail.svg'
import hoverMailIcon from '../../assets/afterMail.svg'
import { useState } from 'react'
export function Contact() {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='bg-[#413E40]'>
            <div>
                <h1 className='text-white pt-10 font-bold text-center text-2xl md:text-5xl lg:text-7xl'>Want To Talk?<span className='text-gray-200 text-lg font-normal'>About any project</span></h1>
                <div className='py-5 flex justify-center items-center'>
                    <a href="mailto:njaseemuddin@gmail.com" className='flex justify-center items-center group hover:italic'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {isHovered ? (
                            <img className='p-2 transition duration-300 ease-in-out transform' src={hoverMailIcon} alt="hoverMailIcon" />
                        ) : (
                            <img className='p-2 transition duration-300 ease-in-out transform' src={mailIcon} alt="mailIcon" />
                        )}
                        <p className='text-white'>
                            Just E-mail
                        </p>
                    </a>
                </div>

            </div>
        </div>
    )
}

// export default Contact