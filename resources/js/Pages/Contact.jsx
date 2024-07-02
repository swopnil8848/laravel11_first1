import React, { useState } from 'react'
import dummyData from './dummyData'
import Nav from './Nav/Nav'
import SideNav from './Nav/SideNav'
import { Link } from '@inertiajs/react'
// import '../../App.css'
import { motion, useScroll, useTransform } from 'framer-motion';


const Contact = ({ auth }) => {

  console.log(auth);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [time, setTime] = useState(getCurrentTime())
  const [date, setDate] = useState(getCurrentDate())

  console.log("this is teh dummy data", dummyData)
  return (

    <div className='min-h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/Wallpaper.png')" }}>
      <head title='Dashboard' />

      <Nav time={time} date={date} />

      <div className='relative flex h-full'>

        <SideNav />

        <div className='bg-white mb-4 rounded-3xl  xl:mr-8 h-screen lg:h-auto w-full lg:w-11/12'>

          <div className='flex justify-between mx-8 my-8'>
            <div className='text-gray-600'><span className='font-bold text-lg '>Contacts </span><span>({dummyData.length})</span></div>
            <div className='text-gray-600 flex items-center '><span className='font-bold text-lg mr-2 '>Filer</span><span><img src="./Filter.png" alt="" /></span></div>
          </div>

          <div className='flex justify-between  max-h-screen h-full overflow-y-auto scrollbar-hidden lg:text-sm xl:text-md mx-1 overflow-hidden '>
            <style>
              {`
                .scrollbar-hidden::-webkit-scrollbar-track {
                    background: transparent;
                }
                .scrollbar-hidden::-webkit-scrollbar {
                    width: 10px;
                }
                .scrollbar-hidden::-webkit-scrollbar-thumb {
                    background-color: #4A5568;
                    border-radius: 3px;
                }
              `}
            </style>
            <div className='borber border-black w-full'>
              <div className='md:px-8 px-4 py-2 md:text-lg text-sm text-gray-800 font-semibold'>Name</div>
              {dummyData.map((obj, count) => (
                <Link key={count} href={route('ContactId', { name: obj.name })} >
                  <div className='border-b border-black py-3 font-semibold text-gray-800 text-xs md:text-md md:px-6 px-2'>
                    <div className='flex h-[34px]'>
                      <div className='mr-2 flex items-center'><img src="./BlackGirl.png" alt="" /></div>
                      <div>{obj.name}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className='borber border-black w-full hidden lg:block'>
              <div className='flex py-2 px-8 md:text-lg text-gray-800 font-semibold'><span className='mr-1'>Contact</span> <span> Number</span></div>
              {dummyData.map((obj) => (
                <div className='border-b border-black py-3 font-semibold text-gray-800 md:px-6'>
                  <div className='flex h-[34px]'>{obj.contactNumber}</div>
                </div>
              ))}
            </div>

            <div className='borber border-black w-full hidden md:block'>
              <div className='px-8 py-2 md:text-lg text-gray-800 font-semibold'>Email</div>
              {dummyData.map((obj) => (
                <div className='border-b border-black py-3 font-semibold text-gray-800 md:px-6'>
                  <div className='flex h-[34px]'>{obj.email}</div>
                </div>
              ))}
            </div>

            <div className='borber border-black w-full mx-auto'>
              <div className='px-6 py-2 text-sm md:text-lg text-gray-800 font-semibold'>Stages</div>
              {dummyData.map((obj) => (
                <div className='border-b border-black py-3 font-semibold text-xs md:text-md text-gray-800 pl-6 px-2 md:px-6'>
                  <div className='flex h-[34px]'>{obj.stage}</div>
                </div>
              ))}
            </div>

            <div className='borber border-black w-full hidden xl:block'>
              <div className='px-8 py-2 flex md:text-lg text-gray-800 font-semibold'><span className='mr-1'>Adden</span> <span> On</span></div>
              {dummyData.map((obj) => (
                <div className='border-b border-black py-3 font-semibold text-gray-800 px-6'>
                  <div className='flex h-[34px]'>{obj.addedOn}</div>
                </div>
              ))}
            </div>

            <div className='borber border-black w-full hidden xl:block'>
              <div className='px-8 py-2 flex md:text-lg text-gray-800 font-semibold'><span className='mr-1'>Added</span><span> By</span></div>
              {dummyData.map((obj) => (
                <div className='border-b border-black h[34px]  py-3 font-semibold text-gray-800 px-6'>
                  <img src="Andrew.png" className='h-[34px] ml-4' alt="" />
                </div>
              ))}
            </div>

            <div className='borber border-black w-full'>
              <div className='px-8 py-2 text-sm md:text-lg text-gray-800 font-semibold'>Actions</div>
              {dummyData.map((obj) => (
                <div className='border-b flex justify-between border-black py-3 font-semibold text-gray-800 px-2 md:px-6'>
                  <div className='h-[34px] md:mx-3 mx-2 flex items-center my-auto'><img src="./eye 1.png" className='' alt="" />   </div>
                  <div className='h-[34px] md:mx-3 mx-2 flex items-center my-auto'><img src="./note.png" className='' alt="" />   </div>
                  <div className='h-[34px] md:mx-3 mx-2 flex items-center my-auto'><img src="./TripleDot.png" className='' alt="" />   </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact