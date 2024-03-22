import { FC, ReactNode } from 'react'
import { Button, Input } from '../../../view'

const ContactForm:FC = ():ReactNode => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-1/2 flex p-4 rounded-xl bg-white'>
                <div className='w-1/2 px-6 py-12'>
                    <h4 className='text-black text-2xl font-bold'>Contact Us</h4>
                    <div className='text-black my-4'>
                        {Array(3).fill(null).map((_, index) => (
                            <div key={index} className='my-3 flex items-center gap-2'>
                                <div className='p-2 bg-gray-200 rounded-lg'></div>
                                <div>123 Prishtina</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='flex items-center gap-4 mb-4'> 
                            <Input input='input' placeholder='Name' value='' setValue={() => {}} type='text' inputStyle='rounded-none border-0 bg-gray-100' />
                            <Input input='input' placeholder='Email' value='' setValue={() => {}} type='email' inputStyle='rounded-none border-0 bg-gray-100' />
                        </div>
                        <div>
                            <Input input='textarea' rows={5} placeholder='Your message here' value='' setValue={() => {}} type='text' inputStyle='rounded-none border-0 bg-gray-100' />
                        </div>
                        <div>
                            <Button text='Send' onClick={() => {}} color='#111' classes='w-full mt-3 rounded-none' />
                        </div>
                    </div>
                </div>
                <div className='bg-blue-700 w-1/2'></div>
            </div>
        </div>
    )
}

export default ContactForm