import React, { useEffect, useRef, useState } from 'react'
import Dashboard3 from './Dashboard3';
import { Link, Head, usePage } from '@inertiajs/react';
import Contact from './Contact';
import Nav from './Nav/Nav';
import SideNav from './Nav/SideNav';


const DashboardGenX = ({ auth }) => {
    const { leadsCount, servicesCount, usersCount, rolesCount, recentLeads, recentServices } = usePage().props;

    console.log("tjisdfosjd ", leadsCount, servicesCount, usersCount, rolesCount, recentLeads, recentServices)
    const currentUrl = window.location.href;
    // console.log(currentUrl); // Logs the current full URL
    const url = new URL(currentUrl);
    const endpoint = url.pathname; // This will give you "/dashboard"

    // console.log(endpoint); // Output: "/dashboard"

    console.log("this is the end pont at the top", endpoint);


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

        }
    }, []);

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
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
    // console.log(time)
    // console.log(date)

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

    // console.log("height of the screen", window.innerHeight)

    // const [content, setContent] = useState(<Dashboard3 auth={auth} />)

    let content = <Dashboard3 auth={auth} users={usersCount} />

    useEffect(() => {
        console.log('content', content, endpoint)
        if (endpoint === '/dashboard') {
            // setContent(<Dashboard3 auth={auth} />);
            content = <Dashboard3 auth={auth} />
            console.log('this is inside the if else statement', content)
        } else if (endpoint === '/contact') {
            // setContent(<Contact />)
            content = <Contact />
            console.log('this is inside the if else statement', content)
        }
        console.log('this is inside of the useEffect statement')
    }, [])

    return (
        <div className='min-h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/Wallpaper.png')" }}>\
            <head title='Dashboard' />

            <Nav time={time} date={date} />


            <div className='relative flex h-full'>

                <SideNav />

                {/* {content} */}
                <Dashboard3 auth={auth} users={usersCount} />
            </div>


        </div>

    )
}

export default DashboardGenX