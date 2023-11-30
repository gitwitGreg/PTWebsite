import '../Styles.css/contact.css'
import { useRef } from 'react';
import cpic from '../assets/contact.jpg'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('calling emailjs');
    emailjs.sendForm('service_qharb2l', 'template_pfkeykj', '#forms', '39ux1Bew-qOnkdp0A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error);
      });
      alert('Email was sent sucessfully!')
  };
  return (
    <div className='contact'>
        <div className='leftside' style={{backgroundImage: `url(${cpic})`}}></div>
        <div className='rightside'>
          <form ref={form} id='forms'>
            <label>Full Name</label>
            <input className='name' type='text' placeholder='Enter full name...' required></input>
            <p>Email</p>
            <input className='email' type='email' required placeholder='Enter email...'></input>
            <p>Message</p>
            <input className='message' type='message' required ></input>
            <Link>
                <button className='messageBtn' type='submit' onClick={sendEmail}>Send Message</button>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default ContactUs