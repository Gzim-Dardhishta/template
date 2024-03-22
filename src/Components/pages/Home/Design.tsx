import { FC, ReactNode } from 'react'
import { DesignType } from '../../../TS/Types'
import { Button } from '../../../view'

interface DesignProps {
    data: DesignType
}

const Design:FC<DesignProps> = ({data}):ReactNode => {

    const { title, img } = data
    return (
        <div className='w-[300px]'>
            <div className='w-full'>
                <img className='w-full rounded-2xl' src={img} alt="" />
            </div>
            <div className='mt-3 text-[1.1em] mb-6'>{title}</div>
            <div className='flex gap-3 w-full'>
                <Button text='Zum Produkt' classes='rounded-none text-white w-full' color='#111' onClick={() => {}} />
                <div className='p-2 w-fit bg-gray-200'><img src="/cart/shopping-cart.png" alt="" /></div>
            </div>
            
        </div>
    )
}

export default Design