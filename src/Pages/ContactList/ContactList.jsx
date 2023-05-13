import ContactItem from '../../Components/ContactItem/ContactItem'
import './ContactList.scss'

const ContactList = () => {
    return (
        <>
            <div className="wrapper">

            <div className="contact__block">

                <div className="contact__block-status">
                    <ul className='contact__list-status'>
                        <li className='contact__item-all item__all'>
                            <p className='list__item-all'>All contact</p>
                            <p>100</p>
                        </li>
                        <li className='contact__item-status item__work'>
                            <p className='list__item-work'>Work</p>
                            <p>2</p>
                        </li>
                        <li className='contact__item-status item__family'>
                            <p className='list__item-family'>Family</p>
                            <p>4</p>
                        </li>
                        <li className='contact__item-status item__private'>
                            <p className='list__item-private'>Private</p>
                            <p>1</p>
                        </li>
                        <li className='contact__item-status item__friends'>
                            <p className='list__item-friends'>Friends</p>
                            <p>1221</p>
                        </li>
                    </ul>
                </div>

                <div className="contact__user-block">

                    <ContactItem/>

                    
                </div>

            </div>

            </div>
        </>
    )
}

export default ContactList