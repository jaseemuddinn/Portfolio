import './ProjectHeading.css'

const ProjectHeading = () => {

    

    return (
        <div className="relative">
            <div className='flex overflow-hidden invisible lg:visible md:visible '>
            {Array.from({ length: 12 }, (_, index) => (
                    <h1 key={index} className='p-4 projects-animation text-7xl font-bold text-gray-300 opacity-5'>
                        Projects
                    </h1>
                ))}
            </div>
            <h1 className="text-center mb-10 mt-[-85px] text-3xl pl-2 lg:text-7xl font-bold md:text-5xl text-white">
                Projects
            </h1>
        </div>

    );
};

export default ProjectHeading;
