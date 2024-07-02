import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { IoMdSearch } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { ImArrowUpRight2 } from "react-icons/im";

const Nav = ({ date, time }) => {
    const [meetingOngoing, setMeetingOngoing] = useState(false)
    const [searchBarActive, setSearchBarActive] = useState(false)

    const toggleDiv = () => {
        setMeetingOngoing(!meetingOngoing)
    }
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("this is the input ref", inputRef)
    }, [])

    const toggleSearchBar = () => {
        setSearchBarActive(!searchBarActive)
        console.log("this is the input ref", inputRef);
        // inputRef.current.focus();
    }



    return (
        <nav className='flex justify-between my-auto py-4' >
            <div className='pl-1 md:pl-4 my-auto ml-1 md:ml-4'><img src='/GenXLogo.png' alt="" /></div>
            {meetingOngoing ? (

                <motion.div
                    initial={{
                        scale: 0.6,
                    }}
                    animate={{
                        scale: 1,
                    }}
                    className='w-[90%] py-1 mr-[20px] rounded-full bg-white flex items-center gap-[30px] justify-between' >
                    <div className='flex gap-[20px]'>
                        <div className='bg-gray-100 flex gap-[10px] px-4 rounded-l-full'>
                            <button onClick={toggleDiv}>
                                <FaChevronLeft />
                            </button>
                            <div className='font-bold flex justify-center items-center'>
                                Your Schedule
                            </div>
                        </div>
                        <div className='border border-black p-2 px-4 rounded-full flex justify-center'>
                            <div className='my-auto mr-4'><MdCalendarMonth /></div>
                            date
                        </div>
                    </div>
                    <div className='flex w-3/4 mx-2 gap-[6px] bg-[#d4ff26] rounded-full'>
                        <div className='w-1/2 flex mx-6 my-2 bg-[#9fc600] rounded-full'>
                            <div className='flex'>
                                <div className='bg-white w-fit flex rounded-full'>
                                    <div className='h-fit my-auto p-1'><img src="/NavPerson.png" alt="" /></div>
                                    <div className='my-auto pr-3 text-sm'>Meeting Ongoing</div>
                                </div>
                                <div className='text-3xl'>|</div>
                            </div>
                            <div className='ml-4 my-auto'>
                                <img src="/navGoogleMeet.png" alt="" />
                            </div>
                        </div>
                        <div className='flex items-center'><div>|</div> <div>time</div> </div>
                        <div className='w-1/2 flex mx-6 my-2 bg-[#9fc600] rounded-full'>
                            <div className='my-auto ml-2'><img src="Andrew.png" alt="" /></div>
                            <div className='mx-auto font-bold rounded-full border border-black w-fit p-4'><ImArrowUpRight2 /></div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <>

                    {!searchBarActive ? (
                        <>
                            <div className='hidden lg:flex mx-4 text-white'>
                                <div className='text-whtie font-semibold text-3xl mx-2 pr-1 border-r-2 my-auto  border-white text-center'>{time}</div>
                                <div className='my-auto pl-1'>
                                    <div className='text-md font-semibold'>{date}</div>
                                    <div className='text-xs'>Fagoon Digitals PTY LTD</div>
                                </div>
                            </div>
                            <div className='hidden lg:flex justify-between bg-gray-100 rounded-full mx-6 h-14 mt-4 cursor-pointer' onClick={toggleDiv}>
                                <div className='my-auto mx-2'><img src="/NavPerson.png" className='rounded-full' alt="" /></div>
                                <div className='my-auto text-gray-800 text-md mr-8 flex '><div className='mr-1'>Meeting</div><div> Ongoing</div></div>
                                <div className='rounded-full border-gray-400 my-auto mx-2'><img src="/navGoogleMeet.png" alt="" /></div>
                            </div>
                        </>) : (
                        <></>
                    )}
                    <div className='flex justify-around ml-8 md:mr-4 '>
                        <div className='mx-1 md:mx-2 flex items-center justify-center'>
                            {!searchBarActive ? (
                                <div onClick={toggleSearchBar} className='cursor-pointer'>
                                    <img src="/Group 2085661496.png" alt="" />
                                </div>
                            ) :
                                <motion.div
                                    initial={{ x: 500, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                >
                                    <div className='text-white mr-1 bg-white/20 w-full h-fit rounded-full flex items-center justify-start inset-0 bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl p-2'>
                                        <IoMdSearch className='text-lg ml-1 my-auto' />
                                        <div className='flex justify-between items-center flex-grow'>
                                            <input ref={inputRef} type='text' className='lg:w-[50vw] h-10 md:w-[20vw] w-full rounded-full mx-1 flex-grow' placeholder='Search' />
                                            <button onClick={toggleSearchBar} className='text-2xl '>
                                                &times;
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            }</div>
                        {searchBarActive && window.innerWidth <= 426 ? " " : (
                            <div className='flex'>
                                <div className='mx-1 md:mx-2 flex items-center justify-center'><img src="/Group 2085661496-1.png" alt="" /></div>
                                <div className='mx-1 md:mx-2 flex items-center justify-center'><img src="/Frame 1171275996.png" alt="" /></div>
                                <div className='mx-1 md:mx-2 flex items-center justify-center'><img src="/Frame 2087324586.png" alt="" /></div>
                                <div className='mx-1 my-auto md:mx-2 flex items-center justify-center'><img src="/Peoples L.png" alt="" /></div>
                                <div className='mx-1 md:mx-2 flex items-center justify-center'><img src="/Profile.png" alt="" /></div>
                            </div>
                        )
                        }
                    </div>
                </>
            )}
        </nav>
    )
}

export default Nav