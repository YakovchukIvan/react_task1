import './cv_info.css'
import About from './about/about'
import Expirience from './work__expirience/expirience'


function InfoCV() {
    return(
        <div className="info__block">
            <About/>
            <Expirience/>
        </div>
    )
}

export default InfoCV