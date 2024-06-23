import React from 'react'

const Nav = ({ date, time }) => {
    return (
        <nav className='flex justify-between my-auto py-4' >
            <div className='pl-1 md:pl-4 my-auto ml-1 md:ml-4'><img src='/GenXLogo.png' alt="" /></div>
            <div className='hidden lg:flex text-white'>
                <div className='text-whtie font-semibold text-4xl pr-1 border-r-2 my-auto  border-white text-center'>{time}</div>
                <div className='my-auto pl-1'>
                    <div className='text-lg font-semibold'>{date}</div>
                    <div>Fagoon Digitals PTY LTD</div>
                </div>
            </div>
            <div className='hidden lg:flex justify-between bg-gray-100 rounded-full mx-6 h-14 mt-4'>
                <div className='my-auto mx-2'><img src="/NavPerson.png" className='rounded-full' alt="" /></div>
                <div className='my-auto text-gray-800 text-lg mr-8'>Meeting Ongoing</div>
                <div className='rounded-full border-gray-400 my-auto mx-2'><img src="/navGoogleMeet.png" alt="" /></div>
            </div>
            <div className='flex justify-around ml-8 md:mr-4 '>
                <div className='mx-1 md:mx-2'><img src="/Group 2085661496.png" alt="" /></div>
                <div className='mx-1 md:mx-2'><img src="/Group 2085661496-1.png" alt="" /></div>
                <div className='mx-1 md:mx-2'><img src="/Frame 1171275996.png" alt="" /></div>
                <div className='mx-1 md:mx-2'><img src="/Frame 2087324586.png" alt="" /></div>
                {/* <div className='rounded-full h-fit min-h-8 bg-gray-500 text-white text-lg md:h-14 w-14  text-center '><h1 className='text-center my-auto'>23</h1></div> */}
                <div className='mx-1 md:mx-2 hidden md:block'><img src="/Peoples L.png" alt="" /></div>
                <div className='mx-1 md:mx-2'><img src="/Profile.png" alt="" /></div>
            </div>
        </nav>
    )
}

export default Nav