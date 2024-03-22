import { FC, ReactNode } from 'react'
import { Footer, Navbar } from '../Components/shared'
import { Product, RelatedProducts } from '../Components/pages/Product'

const ProductPage:FC = ():ReactNode => {
    return (
        <div>
            <Navbar textColor='text-black' />
            <div className='max-w-[1250px] container mx-auto'>
                <Product />
                <RelatedProducts />
            </div>
            <Footer />
        </div>
    )
}

export default ProductPage