import mailIcon from '../../assets/mail.svg'
import hoverMailIcon from '../../assets/afterMail.svg'
function Contact() {
    return (
        <div className='bg-[#413E40]'>
            <div>
                <h1 className='text-white pt-10 font-bold text-center text-2xl md:text-5xl lg:text-7xl'>Want To Talk?<span className='text-gray-200 text-lg font-normal'>About any project</span></h1>
                <div className='py-5 flex justify-center items-center'>
                    <a href="mailto:njaseemuddin@gmail.com" className='flex justify-center items-center group hover:italic'>
                        <img className='p-2 transition duration-300 ease-in-out transform group-hover:hidden' src={mailIcon} alt="mailIcon" />
                        <img className='p-2 hidden transition duration-300 ease-in-out transform group-hover:inline-block' src={hoverMailIcon} alt="hoverMailIcon" />
                        <p className='text-white'>
                            Just E-mail
                        </p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact