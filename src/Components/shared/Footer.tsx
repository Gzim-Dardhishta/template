import { FC, ReactNode } from 'react'

const Footer:FC = ():ReactNode => {
    return (
        <div className='bg-white 2xl:px-[20vw] px-12 py-12 flex lg:flex-row flex-col justify-between'>
            <div className='lg:w-[30%]'>
                <h1 className='text-3xl font-medium'>solution25 academy</h1>
                <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex items-center gap-4'>
                    {Array(5).fill(null).map((_, index) => (
                        <div key={index} className='text-center'>
                            <div className='bg-[#000000] mb-4 mx-auto p-3 rounded-full w-fit'><img src="/images/twitter.png" alt="" /></div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex md:flex-row flex-col md:mt-0 mt-10 gap-16'>
                {Array(3).fill(null).map((_, index) => (
                    <div key={index} className=''>
                        <div className='mb-6 font-semibold text-lg'>Products</div>
                        {Array(4).fill(null).map((_, index) => (
                            <div key={index} className=''>
                                <div className='mb-4 cursor-pointer'>Product1</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer