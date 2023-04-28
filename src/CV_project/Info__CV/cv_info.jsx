import './cv_info.css'
import About from './about/about'
import Expirience from './work__expirience/expirience'
import Education from './education/education'

function InfoCV() {
    return(
        <div className="info__block">
            <About/>
            <Expirience/>
            <Education/>
        </div>
    )
}

export default InfoCV