import { FC, ReactNode } from 'react'

const OurProducts:FC = ():ReactNode => {
    return (
        <div className='flex lg:flex-row lg:gap-0 gap-16 flex-col items-center justify-between bg-gray-200 xl:px-[20vw] px-12 py-16 my-24'>
            <div>
                <h4 className='text-3xl font-semibold lg:w-1/2 lg:mb-0'>Why our Products?</h4>
            </div>

            <div className='flex md:flex-row flex-col items-center gap-14'>
                {Array(3).fill(null).map((_, index) => (
                    <div key={index} className='text-center w-48'>
                        <div className='bg-[#0054CB] mb-4 mx-auto p-3 rounded-full w-fit'><img src="/images/icon1.png" alt="" /></div>
                        <div>Lorem ipsum dolor sit am et, consectetur adipiscing elit, sed do</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurProducts