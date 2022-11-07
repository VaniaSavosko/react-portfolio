import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandTelegram } from 'react-icons/tb'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7y9y2ns', 'template_mi9pbxe', form.current, 'TvhFMZgJw79KE-p-5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>savoskoua@gmail.com</h5>
            <a href="mailto:savoskoua@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Vania Savosko</h5>
            <a href="https://m.me/vania.savosko" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@vania_savosko</h5>
            <a href="https://t.me/vania_savosko" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your massage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
