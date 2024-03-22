import { FC, ReactNode } from 'react'

const AboutAcademy:FC = ():ReactNode => {
    return (
        <div className='flex lg:flex-row flex-col items-center gap-16 max-w-[1250px] xl:px0 px-12 container mx-auto my-24'>
            <div className='lg:w-1/2 w-full'>
                <img className='w-full' src="/images/photo1.png" alt="" />
            </div>

            <div className='lg:w-1/2 w-full'>
                <h2 className='text-3xl font-bold mb-5'>solution25 academy</h2>
                <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    <br />
                    <br />
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    <br />
                    <br />
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    <br />
                    <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        </div>
    )
}

export default AboutAcademy