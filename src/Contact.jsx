import React from 'react'
import { ContactMe } from './ContactStyle'


const Contact = () => {
  return (
    <ContactMe>
    <form action="action_page.php" >
    <div class="container">
      <h1> Contact Me </h1>
      <p> Hi there, contact me to ask me about anything you have in mind. </p>
      <hr />
      <div className='names'>

        
      <label for="text"><b> First name </b></label>
      <input type="text" placeholder="Enter your first name" id="first_name" required />

      
      <label for="text"><b> Last name </b></label>
      <input type="text" placeholder="Enter your last name" id="last_name" required />
  
      </div>


      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="yourname@email.com" name="email" id="email" required />

      
      <label for="message"><b> Message </b></label>
      <textarea  name='subject' placeholder=" Send me a message and i'll reply you as soon as possible... "  id="message" required />


      <hr />

      
      <input type="checkbox" placeholder=" Send me a message and i'll reply you as soon as possible... " name="message" id="message" required />
      <label for="message"> You agree to providing your data to name who may contact you. </label>



      <button type="submit" class="btn_submit"> Send message </button>
    </div>

  </form>
  </ContactMe>
  )
}

export default Contact