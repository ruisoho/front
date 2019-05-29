import React from 'react';
import '../misc/App.css'

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="spacing">
        <h3 id="bottom__pad">Please fill out</h3>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="Charlie" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Dobbs" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="CCDobbs@example.com" />

          <label htmlFor="body">Message</label>
          <textarea type="text" id="body" rows="7" placeholder="Hey! I have an idea and need a good team to build it out" />
        </form>
      </div>
    </div>
  )
}

export default Contact;