import { Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { IoFolderOpen } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { LuAtom } from "react-icons/lu";
import { RiApps2AddLine } from "react-icons/ri";
import { IoMdBook } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { useParams } from 'react-router-dom';

const SideNav = () => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const [select, setSelect] = useState('dashboard')

    useEffect(() => {
        setSelect(url.pathname);
    }, [select])


    return (
        <div className={`container fixed top-[${window.innerHeight}] lg:static overflow-x-scroll lg:overflow-auto justify-around bottom-0 z-30 flex lg:flex-col  lg:mb-12 lg:w-1/12 mb-4 `}>
            {/* <Link href={route('dashboardGenX')}><img src="/dashboard.svg" className='cursor-pointer w-fit h-fit my-2 ml-4 text-green-600' alt="" style={{ minWidth: '56px', height: '56px' }} /></Link> */}
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/dashboard' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><MdOutlineDashboard /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/message' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><LuSend /></button></Link>
            <Link href={route('contact')} className='mx-auto'><button className={`${select === '/contact' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><MdOutlinePersonOutline /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/mail' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><MdOutlineEmail /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/list' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><FaListCheck /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/folder' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><IoFolderOpen /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/dollar' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><FaDollarSign /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/atom' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><LuAtom /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/app' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 lg:mt-20 my-2`}><RiApps2AddLine /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/read' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><IoMdBook /></button></Link>
            <Link href={route('dashboard')} className='mx-auto'><button className={`${select === '/settings' ? 'bg-white text-gray-700' : 'text-white bg-gray-700'} hover:text-gray-700 hover:bg-white text-3xl p-3 rounded-[16px] mx-2 lg:mx-0 my-2`}><MdOutlineSettings /></button></Link>
            {/* <img src="/SideNavIcons/Btn-1.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <Link href={route('contact')}><img src="/SideNavIcons/Btn-2.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" style={{ minWidth: '56px', height: '56px' }} /></Link>
            <img src="/SideNavIcons/Btn-3.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-4.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-5.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-6.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-7.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-8.png" className='cursor-pointer w-fit h-fit my-2 lg:mt-16 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-9.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
            <img src="/SideNavIcons/Btn-10.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" /> */}
        </div>
    )
}

export default SideNav