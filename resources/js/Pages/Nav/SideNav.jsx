import { Link } from '@inertiajs/react'
import React from 'react'

const SideNav = () => {
    return (
        <div className={`container fixed top-[${window.innerHeight}] xl:pl-2 lg:static overflow-x-scroll lg:overflow-auto bottom-0 z-30 flex lg:flex-col justify-between lg:mb-10 lg:w-1/12 `}>
            <Link href={route('dashboardGenX')}><img src="/SideNavIcons/Btn.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" style={{ minWidth: '56px', height: '56px' }} /></Link>
            <img src="/SideNavIcons/Btn-1.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <Link href={route('contact')}><img src="/SideNavIcons/Btn-2.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" style={{ minWidth: '56px', height: '56px' }} /></Link>
            <img src="/SideNavIcons/Btn-3.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-4.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-5.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-6.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-7.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-8.png" className='cursor-pointer w-fit h-fit my-2 lg:mt-16 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-9.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-10.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
        </div>
    )
}

export default SideNav