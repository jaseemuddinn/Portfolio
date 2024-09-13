import about1 from '../../assets/pic.webp'

function About() {

    return (
        <div>
            <div className="grid-container flex items-center pb-10 xl:h-scree bg-zinc-950">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:pb-6 md:px-6">
                    <div className="flex flex-wrap ">
                        {/* <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="relative">
                                <img src={about1} alt=""
                                    className="relative object-top z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    className="absolute z-10 hidden w-full h-full bg-[#272526] rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                            </div>
                        </div> */}
                        <div className="w-full px-4 mb-10 lg:w-1/ lg:mb-0 ">
                            <div className="relative">
                                <h1
                                    className="absolute -top-20   left-0 text-[20px] lg:text-[100px] font-bold  text-gray-200 opacity-5 md:block hidden">
                                    ABOUT
                                </h1>
                                <h1 className="pl-2 text-3xl font-bold border-l-8 md:text-5xl text-white">
                                    About me
                                </h1>
                            </div>
                            <p className="mt-6 mb-10 text-base leading-7 text-gray-200">
                            I'm Jaseem, your friendly neighborhood web developer, UX architect, and community builder. By day (and often by night), I'm busy painting the Internet canvas with projects and lines of code. My mission? To turn zeroes and ones into immersive, interactive experiences that captivate users and bring digital visions to life. Beyond code, I thrive on making community that create space for collaboration, where developers and creators can network, learn, and spark new ideas that shape the future.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About