import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';


const RecentActivity = ({ i, heading, image, time, body, progress, range, target, ref }) => {

    const container = useRef(null);

    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ['start end', 'start start']
    // })

    const scale = useTransform(progress, range, [1, target])

   // console.log(scale)

    return (
        // <div ref={ref} style={{ position: 'sticky', top: `${i * 30}px` }} className={`flex sticky items-center justify-center  rounded-2xl shadow-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1),4px_0_8px_rgba(0,0,0,0.1),-4px_0_8px_rgba(0,0,0,0.1)]`}>
        <div className={`flex m-2 bg-white items-center justify-center p-4 lg:p-6 rounded-[22px]`}>
            <div ref={container} className=' my-auto '>
                <div className='flex mb-2'>
                    <div className='mx-1 my-auto'><img src={image} style={{ height: 29, width: 29 }} alt="" /></div>
                    <h4 className='font-semibold text-sm lg:text-lg'>{heading} {time}</h4>
                </div>
                <p className='tracking-tight line-clamp-2 leading-3 text-sm my-2'>{body} <button className='text-blue-600 underline lg:mt-2 tracking-tight'>Read More</button></p>
                <button className='bg-gray-100 p-1 px-2 mt-2 lg:p-2 flex lg:text-md text-sm  rounded-full'>
                    <div className='my-auto mr-2'><img src="/BlueMail.png" alt="" /></div>
                    <div className='my-auto'>Open Inbox</div>
                </button>
            </div>
        </div>
    )
}

export default RecentActivity