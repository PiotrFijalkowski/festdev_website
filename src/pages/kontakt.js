import React, {useState} from 'react' 
import Form from '../components/Kontakt';
import NavbarKontakt from '../components/NavbarKontakt';
import SidebarKontakt from '../components/SidebarKontakt';

const Kontakt = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SidebarKontakt isOpen={isOpen} toggle={toggle}/>
      <NavbarKontakt toggle={toggle}/>
      <Form />
    </>
  )
}

export default Kontakt