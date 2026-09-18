import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsappSquare} from "react-icons/fa";
import Logo from '../../assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border-bottom '>
        {/* Top bar  */}
        <div className="bg-top py-2">
            <Container>
                  <div className='d-flex justify-content-between'>
                    <div className="contact d-flex gap-3">
                        <span><FaPhoneAlt className='fs-6'/> +880 01830583</span>
                        <span><FaWhatsappSquare className='text-success fs-5'/> +880 01830583</span>
                    </div>

                    <p className='m-0 d-md-block d-none'>World's fastes shopping destination</p>


                    <ul className='d-md-flex d-none gap-3 '>
                        <li>Help?</li>
                        <li>Trac Order</li>
                        <li>English</li>
                    </ul>
                </div>
            </Container>
        </div>

        {/* nav bar */}
        <Container>
            <nav className='d-flex justify-content-between align-items-center py-3 position-relative'>
                <div className="logo">
                    <img src={Logo} alt="Logo" width={100}/>
                </div>

                <ul className={`mobile_menu ${isOpen ? 'active' : ''} d-flex gap-4`}>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            

                <button onClick={()=> setIsOpen(!isOpen)} className='border-0 bg-transparent fs-4 d-md-none' style={{ zIndex: 1000 }}>
                    {
                        isOpen ? <FaTimes /> : <FaBars />
                    }
                </button>

            </nav>
        </Container>

    </div>
  )
}

export default Header