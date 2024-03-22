import { FC, ReactNode } from 'react'
import { Button } from '../../../view'

const Product:FC = ():ReactNode => {
    return (
        <div className='flex gap-12 pt-40'>
            <div className='w-1/2'>
                <div className='w-full py-64 bg-gray-500 mb-4'></div>
                <div className='flex items-center gap-3'>
                    {Array(4).fill(null).map((_, index) => (
                        <div key={index} className='p-10 bg-gray-500'></div>
                    ))}
                </div>
            </div>

            <div className='w-1/2'>
                <span className='text-xs'>Blue and Violet color</span>
                <h4 className='text-lg font-medium w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing</h4>
                <p className='my-3 font-semibold'>$19.99</p>
                <div className='flex  gap-2'>
                    {Array(5).fill(null).map((_, index) => (
                        <div key={index} className='p-2 rounded-lg bg-gray-200'></div>
                    ))}
                </div>
                <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum laboriosam unde officia maiores. Temporibus veritatis provident non accusamus nam itaque, eligendi officiis minima necessitatibus voluptates cum ab, dolorem laboriosam.</p>

                <div className='flex items-center gap-3'>
                    {Array(3).fill(null).map((_, index) => (
                        <div key={index} className='p-3 rounded-full bg-slate-200'></div>
                    ))}
                </div>
                <div className='text-sm my-4'>Quantity:</div>
                <div className='flex items-center gap-6 border  w-fit p-2 mb-4'>
                    <div>-</div>
                    <div>1</div>
                    <div>+</div>
                </div>
                <Button color='#2f5dff' classes='w-full text-white' text='Add to Cart'  onClick={() => {}}/>
            </div>
        </div>
    )
}

export default Product