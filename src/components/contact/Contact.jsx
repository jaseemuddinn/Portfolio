import mailIcon from '../../assets/mail.svg'
import hoverMailIcon from '../../assets/afterMail.svg'
// import './Contact.css'
function Contact() {
    return (
        <div className='bg-[#413E40]'>
            <div>
                <h1 className='text-white pt-10 font-bold text-center text-2xl md:text-5xl lg:text-7xl'>Want To Talk?<span className='text-gray-200 text-lg font-normal'>About any project</span></h1>
                <div class='py-5 flex justify-center items-center'>
                    <a href="mailto:njaseemuddin@gmail.com" class='flex justify-center items-center group hover:italic'>
                        <img class='p-2 transition duration-300 ease-in-out transform group-hover:hidden' src={mailIcon} alt="mailIcon" />
                        <img class='p-2 hidden transition duration-300 ease-in-out transform group-hover:inline-block' src={hoverMailIcon} alt="hoverMailIcon" />
                        <p class='text-white'>
                            Just E-mail
                        </p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact