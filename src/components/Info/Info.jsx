import React from 'react'
import mailIcon from '../../assets/mail.svg'
import hoverMailIcon from '../../assets/afterMail.svg'
import linkedinIcon from '../../assets/linkedin-logo.png'
import githubIcon from '../../assets/github-logo.png'
function Info() {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div className='bg-[#413E40]'>
            <div>
                <h1 className='text-white pt-10 font-bold text-center text-2xl md:text-5xl lg:text-7xl'>
                    Want to talk? <span className='text-gray-200 text-lg font-normal'>About any project</span>
                </h1>
                <div className='py-5 felx justify-center items-center'>
                    <a href="mailto:njaseemuddin@gmail.com" className='flex justify-center items-center hover:italic' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        {isHovered ? (
                            <img className='p-2 transition duration-300 ease-in-out transform' src={hoverMailIcon} alt="mailIcon" />
                        ) : (
                            <img className='p-2 transition duration-300 ease-in-out transform' src={mailIcon} alt="mailIcon" />
                        )}
                        <p className='text-white'>
                            Just E-mail
                        </p>
                    </a>
                    <div className='flex items-center justify-center gap-5 mt-10'>
                        <p className='text-white text-lg md:text-3xl font-light'>For More Info: </p>
                        <a target='_blank' href="https://linkedin.com/in/jaseemuddin">
                            <img src={linkedinIcon} alt="linkedin" style={{ width: "32px" }} />
                        </a>
                        <a target='_blank' href="https://github.com/jaseemuddinn">
                            <img src={githubIcon} alt="linkedin" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Info