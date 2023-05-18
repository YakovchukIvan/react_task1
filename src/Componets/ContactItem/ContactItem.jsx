import './ContactItem.css'

import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/action'

import { Link } from "react-router-dom"

const ContactItem = () => {

  const contacts = useSelector((state) => state.contacts)
  const searchTerm = useSelector((state) => state.searchTerm)
  const dispatch = useDispatch()

  const handleDeleteContact = (id) => {
    console.log(id);
    dispatch(deleteContact(id))
  }

  const filteredContacts = searchTerm
  ? contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  :contacts


    return(
        <div className='wrapper_contact'>
          {/* <div className='container-fluid'>
            <div className='row'>
              <div className='col-4'><h4 className='text-end text-primary m-3'>Name</h4></div>
              <div className='col-4'><h4 className='text-center text-primary m-3'>Phone</h4></div>
              <div className='col-4'><h4 className=' text-primary m-3'>Email</h4></div>
            </div>
          </div> */}
          {/* <hr className='m-0' /> */}
            {filteredContacts && filteredContacts.map((contact) => (
                <div className='user__contact' key={contact.id}>
                  <div className=''>
                    <img className='' src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar" />
                  </div>
                    <div className=''>
                      <div className=''>
                        <h3>{contact.name}</h3>
                        <p>{contact.status}</p>
                      </div>
                      <div className=''>
                        <p>{contact.phone}</p>
                      </div>
                      <div className=''>
                        <p>{contact.email}</p>
                      </div>
                      <div className=''>
                        <Link to={`/update-contact/${contact.id}`}><button title='редагувати контакт' className='btn__pencil'></button></Link>
                        <button title='видалити контакт' onClick={() => handleDeleteContact(contact.id)} className='btn__delete'></button>
                      </div>    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem