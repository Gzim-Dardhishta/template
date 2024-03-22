import { FC, ReactNode, useEffect, useRef, useState } from 'react'
import { academyDesigns } from '../../../data/Lists'
import Design from './Design'
import { motion } from 'framer-motion'

const Designs:FC = ():ReactNode => {

    const [width, setWidth] = useState(0)

    const carousel = useRef()

    useEffect(() => {
        if(carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        }
    }, [])
    
    return (
        <div className='xl:pl-[20vw] pl-12'>
            <h4 className='text-4xl font-medium my-10'>This is a design for the academy</h4>

            <motion.div ref={carousel} className='overflow-hidden' whileTap={'grabbing'}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className='flex gap-10 w-full'>
                    {academyDesigns.map((design, index) => (
                        <motion.div key={index}>
                            <Design data={design} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Designs
