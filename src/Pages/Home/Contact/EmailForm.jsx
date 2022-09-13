import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nxt9fhr', 'template_r812nfu', form.current, 'Kfimmd-2B9rXHPzeC')
      .then((result) => {
          console.log(result.text);
          alert("Thanks! for messaging.")
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Name</label>
      <input type="text" name="from_name" placeholder='Your name' required/>
      <label>Email</label>
      <input type="email" name="email" placeholder='Your email' required/>
      <label>Phone No.</label>
      <input type="tel" name="phone" placeholder='Your phone number' required/>
      <label>Message</label>
      <textarea name="message" placeholder='Your message to Vishal Gupta' required />
      <input type="submit" value="Send" id={styles.but} />
    </form>
  );
};