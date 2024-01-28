import about from '../../assets/jaseem.png'

function About() {
    return (
        // <div className='bg-[#413E40] h-full lg:h-lvh'>
        <div>
            {/* <h1 className='text-2xl text-white md:4xl lg:text-7xl text-center py-5 font-medium'>
                About me
            </h1> */}
            {/* <div >
                <p className='text-white px-5 lg:px-20 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas laborum aut dolore illum tempore est distinctio maxime voluptatem sunt. Distinctio nam temporibus dolores nemo fuga aperiam adipisci odio molestiae recusandae?
                </p>
                <br />
                <p className='text-white px-5 lg:px-20 text-lg'>

                    Quisquam dolor voluptatem nam hic nulla error eos architecto porro, ipsam laborum quibusdam explicabo dolorum quis eum fugiat ipsum? Saepe eveniet reprehenderit ipsa nostrum est voluptas ducimus neque corporis quod.
                </p>
                <br />
                <p className='text-white px-5 lg:px-20 text-lg'>

                    Optio corporis dolores numquam ea reiciendis labore provident omnis voluptate iusto ipsa beatae molestiae, praesentium eaque minima fuga nulla blanditiis quasi voluptates quibusdam placeat. Cumque quo iusto maxime cupiditate asperiores!
                </p>
                <br />
                <p className='text-white px-5 lg:px-20 text-lg'>
                    Nostrum minima harum repellat ipsam ea aliquid eum officiis et ex? Recusandae, a voluptatibus qui officiis quo totam, repellat molestiae placeat, quidem sunt repudiandae. Eos, quaerat. Assumenda laudantium harum sed?

                </p>
                <br />
                <p className='text-white px-5 lg:px-20 text-lg'>
                    Quam dolorum laboriosam fugit qui molestiae magni suscipit sint numquam esse? Explicabo quasi voluptatum omnis maiores, tenetur nostrum aut earum enim dolorem ut, at, blanditiis doloribus asperiores tempora quas eligendi.
                </p>
            </div> */}
            <section class="flex items-center pb-10 xl:h-screen bg-[#413E40] ">
                <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:pb-6 md:px-6">
                    <div class="flex flex-wrap ">
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div class="relative">
                                <img src={about} alt=""
                                    class="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded" />
                                <div
                                    class="absolute z-10 hidden w-full h-full bg-[#272526] rounded-bl-[80px] rounded -bottom-6 right-6 lg:block">
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div class="relative">
                                <h1
                                    class="absolute -top-20   left-0 text-[20px] lg:text-[100px] font-bold  text-gray-200 opacity-5 md:block hidden">
                                    About me
                                </h1>
                                <h1 class="pl-2 text-3xl font-bold border-l-8 md:text-5xl text-white">
                                    About me
                                </h1>
                            </div>
                            <p class="mt-6 mb-10 text-base leading-7 text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About