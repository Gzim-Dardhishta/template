import { FC, ReactNode } from 'react'
import { Button } from '../../../view'

const Banner1:FC = ():ReactNode => {
    return (
        <div className="bg-[url('/images/bannerimg.png')] bg-center pt-56 xl:pt-80 pb-10">
            <div className='xl:w-1/2 lg:w-3/5 w-4/5 mx-auto text-center'>
                <h2 className='text-white md:text-6xl text-5xl font-bold'>Mockup to empower your creative workflow</h2>
                <p className='text-white text-xl my-6 w-4/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='w-fit mx-auto text-black my-10 flex gap-4'>
                <Button text='Lorem ipsum' onClick={() => {}} color='#fff' classes='text-black rounded-none px-6 py-4 text-xl font-medium' />
                <Button text='Lorem ipsum' onClick={() => {}} color='#fff' classes='text-black rounded-none px-6 py-4 text-xl font-medium'/>
            </div>

            <div className='flex items-center justify-center gap-4 md:mt-64 mt-44'>
                <div className='p-2 border border-white rounded-full bg-white'></div>
                <div className='p-2 border border-white rounded-full bg-transparent'></div>
                <div className='p-2 border border-white rounded-full bg-transparent'></div>
            </div>
        </div>
    )
}

export default Banner1