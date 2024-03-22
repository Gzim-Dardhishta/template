import { FC, ReactNode } from 'react'
import { navLinks } from '../../data/Lists'
import { Link } from 'react-router-dom'

type NavBarType = {
    textColor: string
}

const Navbar:FC<NavBarType> = ({textColor}):ReactNode => {
    return (
        <div className={`fixed z-50 xl:px-[20vw] px-12 ${textColor}`} style={{color: textColor}}>
            <div className='flex justify-between items-center'>
                <div className='text-3xl font-bold mr-12 py-7'>
                    <h1>LOGO</h1>
                </div>

                <div className='hidden lg:flex items-center gap-36'>
                    <nav>
                        <ul className='flex items-center gap-16'>
                            {navLinks.map((n, index) => (
                                <Link className='py-7' key={index} to={n.path}>{n.link}</Link>
                            ))}
                        </ul>
                    </nav>

                    <div className='flex items-center gap-5'>
                        <div className='w-6'>
                            <img src='/user/fi-rr-user.png' alt="" />
                        </div>
                        <div className='w-6'>
                            <img src='/search/fi-rr-search.png' alt="" />
                        </div>
                        <div className='w-6'>
                            <img src='/cart/shopping-cart.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar