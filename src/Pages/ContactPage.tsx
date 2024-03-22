import { FC, ReactNode } from 'react'
import { Navbar } from '../Components/shared'
import { ContactForm } from '../Components/pages/ContactUs'

const ContactPage:FC = ():ReactNode => {
    return (
        <div className='bg-black'>
            <Navbar textColor='text-white' />
            <div className=' text-white'>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage