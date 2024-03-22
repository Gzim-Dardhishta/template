import { FC, ReactNode } from 'react'

const Academy:FC = ():ReactNode => {
    return (
        <div className='2xl:px-[20vw] px-12 my-24'>
            <div className='text-center'>
                <h4 className='text-4xl font-medium'>solution25 academy</h4>
                <p className='text-lg w-4/5 my-5 mx-auto font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='flex lg:flex-row flex-col items-center gap-10'>
                <div><img src="/images/photo4.png" alt="" /></div>
                <div><img src="/images/photo4.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Academy