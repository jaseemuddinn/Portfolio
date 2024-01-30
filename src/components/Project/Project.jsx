import ProjectItem from './ProjectItem'
import customiseOnnoff from '../../assets/ProjectsImg/customiseOnnoff.png'
import di from '../../assets/ProjectsImg/di.png'
import ggvra from '../../assets/ProjectsImg/ggvra.png'
import movieSite from '../../assets/ProjectsImg/movieSite.png'
import onnoff from '../../assets/ProjectsImg/onnoff.png'
import shoeStore from '../../assets/ProjectsImg/shoeStore.png'
import socialHub from '../../assets/ProjectsImg/socialHub.png'
import Techlab from '../../assets/ProjectsImg/Techlab.png'
import ProjectHeading from '../Heading/ProjectHeading'

function Project() {
  return (
    <div className='bg-[#413E40]'>
        <h1>
            <ProjectHeading />
        </h1>
        <ProjectItem name={"OnnOff Customisation"} screenshotSrc={customiseOnnoff} projectSrc={"https://customisation.onnoff.in/"} createdUsing={"Three.js"}/>
        <ProjectItem name={"Shoe Store FE"} screenshotSrc={shoeStore} projectSrc={"https://shoe-store-ui.vercel.app/"} createdUsing={"React + Tailwind"}/>
        <ProjectItem name={"Dinnovations"} screenshotSrc={di} projectSrc={"https://dinnovations.vercel.app/"} createdUsing={"React"} />
        <ProjectItem name={"Movie Site FE"} screenshotSrc={movieSite} projectSrc={"https://movie-site-theta-eight.vercel.app/"} createdUsing={"React"}/>
        <ProjectItem name={"SocialHub"} screenshotSrc={socialHub} projectSrc={"https://social-hub.app/"} createdUsing={"React + Vite + Tailwind"} />
        <ProjectItem name={"GGVRA"} screenshotSrc={ggvra} projectSrc={"https://ggvra.in/"} createdUsing={"Wordpress"} />
        <ProjectItem name={"OnnOff"} screenshotSrc={onnoff} projectSrc={"https://onnoff.in/"} createdUsing={"Wordpress"} />
        <ProjectItem name={"Techlab Studio"} screenshotSrc={Techlab} projectSrc={"http://techlabstudio.in/"} createdUsing={"Wordpress"} />
    </div>
  )
}

export default Project