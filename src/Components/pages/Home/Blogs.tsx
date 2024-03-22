import { FC, ReactNode } from 'react'

const Blogs:FC = ():ReactNode => {
    return (
        <div className='2xl:px-[20vw] px-12'>

            <h4 className='text-3xl font-semibold mb-8'>Blog</h4>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-7'>
                {Array(4).fill(null).map((_, index) => (
                    <div key={index} className='p-3 bg-slate-50'>
                        <div className='w-full'><img className='w-full' src="/images/photo3.png" alt="" /></div>
                        <div className='text-lg font-medium my-4'>5 tips how to make User Flow in a short time</div>
                        <div>Et vel ornare fusce bibendum cras et odio cras. Nunc nullam ultricies.</div>
                        <div className='flex items-center gap-3 mt-5'>
                            <div className='p-6 w-fit rounded-full bg-gray-400'></div>
                            <div>
                                <div>John Doe</div>
                                <div>Senior UX Designer</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs