import { useState } from 'react';

const ProjectItem = ({ name, screenshotSrc, projectSrc, createdUsing }) => {
  const [showScreenshot, setShowScreenshot] = useState(false);

  const handleMouseEnter = () => {
    setShowScreenshot(true);
  };

  const handleMouseLeave = () => {
    setShowScreenshot(false);
  };

  const handleClick = () => {
    // window.location.href = projectSrc;
    window.open(projectSrc, '_blank');
    
  };

  return (
    <div className="flex px-4">
      <div className="w-1/2 cursor-pointer p-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <h2 className="text-2xl lg:text-6xl font-bold text-white hover:italic">{name}</h2>
        <p className='text-gray-100'>{createdUsing}</p>
      </div>
      {showScreenshot && (
        <div className="absolute invisible md:invisible lg:visible left-1/2 transform -translate-x-1/4 p-10 shadow-2xl">
          <img src={screenshotSrc} alt={name} className="w-full" />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
