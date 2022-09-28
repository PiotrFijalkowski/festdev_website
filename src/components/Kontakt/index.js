import React, { useRef, useState } from 'react'
import { FormContainer, SubmitMessage, SubmitErrorMessage } from './FormElements'
import emailjs from 'emailjs-com'

const Form = () => {
  const form = useRef(); 

  const [isSubmit, setisSubmit] = useState('hidden');
  const [isErrorSubmit, setisErrorSubmit] = useState('hidden');
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4mo28us', 'template_f9q8zws', form.current, 'SbQzkwes5QskfjwrT')
      .then((result) => {
          console.log(result.text);
          setisSubmit('show')
          setisErrorSubmit('hidden')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setisErrorSubmit('show')
          setisSubmit('hidden')
      });
  }
  return (
    <>
      <FormContainer>
        <h1>Skontaktuj się z Nami</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Imię i Nazwisko' required/>
          <input type="email" placeholder='Twój Adres Email' name="email" required/>
          <input type="text" placeholder='Temat' name="subject" required /> 
          <textarea id="w3review" name="message" rows="4" cols="50" placeholder='Tu wpisz treść wiadomości' required/>
          <input type="submit" value="Wyślij wiadomość" />
        </form>
       <SubmitMessage className={isSubmit}>
        Dziękujemy za wysłanie wiadomości. Wkrótce konsultant odezwie się do Państwa.
        </SubmitMessage> 
       <SubmitErrorMessage className={isErrorSubmit}>
        Błąd wysyłania wiadomości. Spróbuj ponownie. Jeśli nie pomoże zapraszamy do kontaktu pod adresem festdevpl@gmail.com
        </SubmitErrorMessage> 
      </FormContainer>
    </>
  )
}

export default Form
