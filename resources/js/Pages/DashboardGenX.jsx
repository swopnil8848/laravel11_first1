import React, { useEffect, useRef, useState } from 'react'
import Dashboard3 from './Dashboard3';
// import { Link, useNavigate } from 'react-router-dom';
import { Link, Head, usePage } from '@inertiajs/react';


// import '../../App.css'
// import LineChart from '../../Line Chart/LineChart';
// import Pie_1 from '../Pie Chart/Pie_1';
// import Pie_2 from '../Pie Chart/Pie_2';

// import Dashboard1 from './Dashboard1'
// import Dashboard2 from './Dashboard2'

// import LineChart from '../Vissulization/Line Chart/LineChart'
// import Pie_1 from '../Vissulization/Pie Chart/Pie_1'
// import Pie_2 from '../Vissulization/Pie Chart/Pie_2'
// import Dashboard3 from './Dashboard3'
// import { Navigate, Outlet, useNavigate } from 'react-router-dom'
// import Contact from '../Contact/Contact'

// import { usePage } from '@inertiajs/inertia-react';

const DashboardGenX = ({ auth }) => {
    const { leadsCount, servicesCount, usersCount, rolesCount, recentLeads, recentServices } = usePage().props;
    console.log("tjisdfosjd ", leadsCount)
    const divRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const Pie_1ref = useRef(null);
    const Pie_2ref = useRef(null);
    const Pie_3ref = useRef(null);

    console.log("this is the auth", auth)



    // const navigate = useNavigate();

    const [select, setSelect] = useState('overview')

    const [nav, setNav] = useState(false)


    useEffect(() => {
        if (divRef.current) {
            const Width = divRef.current.offsetWidth; // Width of the div
            const Height = divRef.current.offsetHeight; // Height of the div

            // Alternatively, you can use getBoundingClientRect() for more accurate measurements:
            const rect = divRef.current.getBoundingClientRect();
            setWidth(rect.width); // Width of the div
            setHeight(rect.height); // Height of the div

            console.log('Width:', width);
            console.log('Height:', height);
        }
    }, []);

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
    console.log(time)
    console.log(date)

    const HumanLikeAgents = [
        {
            "role": "Project Manager",
            "name": "Andrew Tate",
            "image": "./andrew.png"
        },
        {
            "role": "Customer Support",
            "name": "Caleb May",
            "image": "./customerSupport.png"
        },
        {
            "role": "Fullstack Developer",
            "name": "Yantrum",
            "image": "./fullStack.png"
        },
        {
            "role": "Customer Support",
            "name": "Caleb May",
            "image": "./customerSupport.png"
        },
        {
            "role": "Fullstack Developer",
            "name": "Yantrum",
            "image": "./fullStack.png"
        }
    ]

    console.log("height of the screen", window.innerHeight)

    // const divStyle = {
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: 'cover', // This makes sure the image covers the entire div
    //     backgroundPosition: 'center', // This centers the image in the div
    //     height: '100vh', // You can adjust the height as needed
    //     width: '100vw'  // You can adjust the width as needed
    //   };

    return (
        <div className='min-h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/Wallpaper.png')" }}>

            <nav className='flex justify-between my-auto py-4' >
                <div className='pl-1 md:pl-4 my-auto ml-1 md:ml-4'><img src='./GenXLogo.png' alt="" /></div>
                <div className='hidden lg:flex text-white'>
                    <div className='text-whtie font-semibold text-4xl pr-1 border-r-2 my-auto  border-white text-center'>{time}</div>
                    <div className='my-auto pl-1'>
                        <div className='text-lg font-semibold'>{date}</div>
                        <div>Fagoon Digitals PTY LTD</div>
                    </div>
                </div>
                <div className='hidden lg:flex justify-between bg-gray-100 rounded-full mx-6 h-14 mt-4'>
                    <div className='my-auto mx-2'><img src="./NavPerson.png" className='rounded-full' alt="" /></div>
                    <div className='my-auto text-gray-800 text-lg mr-8'>Meeting Ongoing</div>
                    <div className='rounded-full border-gray-400 my-auto mx-2'><img src="./navGoogleMeet.png" alt="" /></div>
                </div>
                <div className='flex justify-around ml-8 md:mr-4 '>
                    <div className='mx-1 md:mx-2'><img src="./Group 2085661496.png" alt="" /></div>
                    <div className='mx-1 md:mx-2'><img src="./Group 2085661496-1.png" alt="" /></div>
                    <div className='mx-1 md:mx-2'><img src="./Frame 1171275996.png" alt="" /></div>
                    <div className='mx-1 md:mx-2'><img src="./Frame 2087324586.png" alt="" /></div>
                    {/* <div className='rounded-full h-fit min-h-8 bg-gray-500 text-white text-lg md:h-14 w-14  text-center '><h1 className='text-center my-auto'>23</h1></div> */}
                    <div className='mx-1 md:mx-2 hidden md:block'><img src="./Peoples L.png" alt="" /></div>
                    <div className='mx-1 md:mx-2'><img src="./Profile.png" alt="" /></div>
                </div>
            </nav>


            <div className='relative flex h-full'>

                <div className={`container fixed top-[${window.innerHeight}] xl:pl-2 lg:static overflow-x-scroll lg:overflow-auto bottom-0 z-30 flex lg:flex-col justify-between lg:mb-10 lg:w-1/12 `}>
                    <Link href={route('dashboardGenX')}><img src="./SideNavIcons/Btn.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" /></Link>
                    <img src="./SideNavIcons/Btn-1.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    {/* <img src="./SideNavIcons/Btn-2.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" /> */}
                    <Link href={route('contact')}><img src="./SideNavIcons/Btn-2.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" /></Link>
                    <img src="./SideNavIcons/Btn-3.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-4.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-5.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-6.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-7.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-8.png" className='cursor-pointer w-fit h-fit my-2 lg:mt-16 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-9.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                    <img src="./SideNavIcons/Btn-10.png" className='cursor-pointer w-fit h-fit my-2 ml-4' alt="" />
                </div>

                <Dashboard3 auth={auth} />
                {/* <Outlet /> */}
                {/* <{props}/> */}
            </div>


        </div>

    )
}

export default DashboardGenX