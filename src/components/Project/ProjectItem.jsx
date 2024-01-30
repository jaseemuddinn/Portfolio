import { useState } from 'react';

const ProjectItem = ({ name, screenshotSrc, projectSrc }) => {
  const [showScreenshot, setShowScreenshot] = useState(false);

  const handleMouseEnter = () => {
    setShowScreenshot(true);
  };

  const handleMouseLeave = () => {
    setShowScreenshot(false);
  };

  const handleClick = () => {
    window.location.href = projectSrc;
  };

  return (
    <div className="flex">
      <div className="w-1/2 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <h2 className="text-2xl lg:text-7xl font-bold">{name}</h2>
      </div>
      {showScreenshot && (
        <div className="w-1/2">
          <img src={screenshotSrc} alt={name} className="w-full" />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
