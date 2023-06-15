import './ContactItem.css'

import { useSelector, useDispatch } from 'react-redux'
// import { deleteContact } from '../../redux/action'

import { Link } from "react-router-dom"


import React, { useState } from 'react'


const ContactItem = () => {

  const [details, setDetails] = useState(false);

  const contacts = useSelector((state) => state.contacts)
  const searchTerm = useSelector((state) => state.searchTerm)
  // const dispatch = useDispatch()

  // const handleDeleteContact = (id) => {
  //   console.log(id);
  //   dispatch(deleteContact(id))
  // }

  const filteredContacts = searchTerm
  ? contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  :contacts


    return(
        <div className='wrapper_contact'>
            {filteredContacts && filteredContacts.map((contact) => (
                <div className='user__contact' key={contact.id}>
                  <div className=''>
                    <img className='avatar__user' src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="avatar" />
                    <span title='Улюблені' className={`img__${contact.favorite}`}></span>
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
                      
                      <Link to={`/update-contact/${contact.id}`}><button title='редагувати контакт' className='btn__pencil'></button></Link> 
                      
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactItem