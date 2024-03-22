import { FC, ReactNode } from 'react'

const RelatedProducts:FC = ():ReactNode => {
    return (
        <div className='my-20'>
            <h4 className='text-center text-xl font-medium my-10'>RelatedProducts</h4>
            <div className='flex items-center gap-10'>
                {Array(3).fill(null).map((_, index) => (
                    <div key={index} className='w-1/3'>
                        <div className='bg-slate-200 p-4 h-72 relative'>
                            <div className='bg-white text-center absolute bottom-4 w-[90%] p-2 mt-auto'>View Product</div>
                        </div>
                        <h3 className='text-lg font-medium mt-3'>Product</h3>
                        <div className='flex items-center gap-1 my-2'>
                            {Array(5).fill(null).map((_, index) => (
                                <div key={index} className='p-2 rounded-full bg-slate-200'></div>
                            ))}
                        </div>
                        <p className='text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consectetur aliquid maiores cumque animi, architecto quam corporis? </p>
                        <div className='text-lg font-medium'>6000$</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts