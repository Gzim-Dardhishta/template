import { FC, ReactNode } from 'react'
import { Footer, Navbar } from '../Components/shared'
import { AboutAcademy, Academy, Banner1, Blogs, Designs, OurProducts } from '../Components/pages/Home'

const HomePage:FC = ():ReactNode => {
    return (
        <div className='bg-gray-50'>
            <Navbar textColor='text-black' />
            <Banner1 />
            <AboutAcademy />
            <Designs />
            <OurProducts />
            <Blogs />
            <Academy />
            <Footer />
        </div>
    )
}

export default HomePage