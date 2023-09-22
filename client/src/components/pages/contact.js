import React from 'react'
import Sidebar from '../sidebar/sidebar'
import "./contact.css"
const Contact = () => {
  return (
    <div>
        <Sidebar />
        <div className="contact">
            Contact Us
        </div>
        <p>Please fill this form to get more insights for the product or get more information about the products.</p>
        <div className='contact-form'>
            <form>
            <input
            name="name"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Name"
          />
          <input
            name="email"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Email"
          />
          <input
            name="query"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Query"
          />
          <button type="submit"> Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact