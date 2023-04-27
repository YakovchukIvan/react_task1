import './title__cv.css'
import Contact from './contact/contact'
import TechSkills from './tech_skills/tech_skills'
import SoftSkills from './soft_skills/soft_skills'


function TitleBlock() {
    return(
        <div className='title__block'>
            <Contact/>
            <TechSkills/>
            <SoftSkills/>
        </div>
    )
}

export default TitleBlock