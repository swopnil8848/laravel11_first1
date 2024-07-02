import React, { useEffect, useState, useRef } from 'react'
import Nav from './Nav/Nav'
import SideNav from './Nav/SideNav'
import '../App.css'
import RecentActivity from './RecentActivity'
import { useScroll } from 'framer-motion'

const ContactDetail = ({lead,logs,task,notes,deals}) => {
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    const [invoicesPaid, setInvoicesPaid] = useState(67);

    const invoiceRef = useRef(null)

    const recentActivity = [
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        },
        {
            'image': '/bishal.png',
            "heading": 'Harry sent Email to Bishal',
            "time": '9:30 pm 16/06024',
            'body': 'This is where it all goes down. You will compete head to head with your friends and rivals. Get ready!'
        }
    ]

    useEffect(() => {

        setInvoicesPaid(invoiceRef?.current?.offsetWidth);
//        console.log(invoicesPaid, "invoices paid width")

    }, [])

    const getCurrentDate = () => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const [time, setTime] = useState(getCurrentTime())
    const [date, setDate] = useState(getCurrentDate())

    console.dir(lead)


    return (
        <div className='min-h-screen bg-cover bg-no-repeat' style={{ backgroundImage: "url('/Wallpaper.png')" }}>\
            <head title='Dashboard' />

            <Nav time={time} date={date} />


            <div className='relative flex h-fit'>

                <SideNav />

                <div className='lg:w-11/12 mx-1 lg:flex w-full xl:mr-8 xl:mt-6 mt-2 h-fit bg-white rounded-3xl'>
                    <div className='lg:w-1/3'>
                        <div className='flex m-4 cursor-pointer'>
                            <div className='mx-2 mx my-auto'><img src="/LeftBackBlack.png" alt="" /></div>
                            <h2 className='font-semibold text-[#26292D]'>Back</h2>
                        </div>
                        <div className='flex flex-col lg:mt-12 xl:mx-12 shadow-lg p-8 px-6 rounded-3xl'>
                            <div className='flex w-full'>
                                <div className='md:flex lg:block mx-auto'>
                                    <div>
                                        <div className='flex justify-center mx-auto'><img src="/BlackGirlBig.png" alt="" /></div>
                                        <h1 className='text-center text-2xl font-semibold'>{lead.first_name+" "+lead.last_name}</h1>
                                    </div>
                                    <div className='bg-[#C6F432] md:w-[400px] md:ml-6 lg:ml-0 min-w-[280px] lg:w-fit rounded-3xl py-2'>
                                        <div className='flex justify-between mx-2 xl:mx-4'>
                                            <div className='flex bg-[#00000054] w-fit rounded-full p-1 px-3'>
                                                <div className='my-auto'><img src="/Andrew.png" alt="" /></div>
                                                <div className='text-white w-fit ml-2'>
                                                    <div className='text-xs'>added by</div>
                                                    <div className='font-semibold text-xs'>Andrew Tate</div>
                                                </div>
                                            </div>
                                            <div className='my-auto flex'>
                                                <button className='mr-2 xl:mr-4'><img src="/note.png" alt="" className='bg-white p-2 rounded-full' /></button>
                                                <button className=''><img src="/TripleDot.png" alt="" className='bg-white p-2 rounded-full' /></button>
                                            </div>
                                        </div>
                                        <div className='font-semibold mt-4 mx-4'>
                                            <div className='my-1'>
                                                <span>Contact : </span>
                                                <span>0422 8456 7219 </span>
                                            </div>
                                            <div className='my-1'>
                                                <span>Email: </span>
                                                <span>{lead.work_email}</span>
                                            </div>
                                            <div className='my-1'>
                                                <span>Status: </span>
                                                <span className='bg-gray-600 text-white py-1 px-2 rounded-lg'>New Lead </span>
                                            </div>
                                            <div className='my-1'>
                                                <span>Created On: </span>
                                                <span>May 27,2024 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='md:flex justify-around lg:block w-full'>
                                <div className='flex justify-between items-center p-2 bg-black rounded-full mt-6 md:w-[30%] lg:w-full'>
                                    <div className='flex'>
                                        <div><img src="/MailBlack.png" alt="" className='bg-white p-3 rounded-full' /></div>
                                        <h5 className='text-white my-auto font-semibold ml-4 lg:text-lg'>Emails</h5>
                                    </div>
                                    <div className='bg-white h-7 w-7 mt-1 mr-1 rounded-full text-center flex items-center justify-center'>1</div>
                                </div>
                                <div className='flex justify-between items-center p-2 bg-black rounded-full mt-6 md:w-[30%] lg:w-full'>
                                    <div className='flex'>
                                        <div><img src="/MailBlack.png" alt="" className='bg-white p-3 rounded-full' /></div>
                                        <h5 className='text-white my-auto font-semibold ml-4 lg:text-lg'>SMS</h5>
                                    </div>
                                    <div className='bg-white h-7 w-7 mt-1 mr-1 rounded-full text-center flex items-center justify-center'>1</div>
                                </div>
                                <div className='flex justify-between items-center p-2 bg-black rounded-full mt-6 md:w-[30%] lg:w-full'>
                                    <div className='flex'>
                                        <div><img src="/MailBlack.png" alt="" className='bg-white p-3 rounded-full' /></div>
                                        <h5 className='text-white font-semibold ml-4 lg:text-lg'>Linked Platform</h5>
                                    </div>
                                    <div className='bg-white h-7 w-7 mt-1 mr-1 rounded-full text-center flex items-center justify-center'>1</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='lg:w-2/3 my-8 lg:mr-8 h-auto bg-[#26292D] pb-1 mx-1 pt-2 rounded-[44.3px]'>
                        <div ref={invoiceRef} className='bg-[#000000CC] m-2 lg:m-4 p-4 rounded-[40px] '>
                            <div className='w-full flex md:px-4 lg:px-8'>
                                <div style={{ width: 67 * invoicesPaid * 0.01 }} className='z-10 relative rounded-full bg-[#C6F432] h-[38px]'>
                                    <div className='z-20 absolute h-[30px] w-[30px] rounded-full top-[4px] right-[4px] bg-white '><span className='text-opacity-80 text-xxs ml-1 font-semibold '>63.4%</span></div>
                                    {/* <div className='absolute  h-10 w-10 rounded-full bg-[#FFFFFF94] -right-1 bottom-1 top-1'></div> */}
                                </div>
                                <div style={{ width: (100 - 67) * invoicesPaid * 0.01 + 2 }} className='relative -ml-4 z-1 rounded-r-full bg-[#FFFFFF94]'></div>
                            </div>
                            <div className='flex justify-between items-center md:px-6 xl:px-12'>
                                <div>
                                    <div className='text-white  md:text-lg my-1 mt-4'>
                                        Invoices Paid
                                    </div>
                                    <div className='lg:flex items-center'>
                                        <div className='text-[#C6F432] font-semibold  text-lg md:text-3xl mr-2'>$15,410.65</div>
                                        <div className='text-white md:font-semibold text-xs md:text-sm '>
                                            <div>$4678.90</div>
                                            <div className='-mt-1'>Outstanding Amount</div>
                                        </div>
                                    </div>
                                </div>
                                <button className='bg-white text-xs md:text-md flex items-center md:px-2 p-2 px-4 rounded-full h-fit my-auto'>
                                    <h5 className='lg:text-lg text-sm'>View All Invoices</h5>
                                    <h5><img src="./RightBlackArrow.png" alt="" /></h5>
                                </button>
                            </div>
                        </div>
                        <div className='md:flex mx-2 lg:mx-6'>
                            <div className='md:w-1/3 mx-2 bg-[#FF6C4B] text-white p-6 rounded-[44px] h-[183px] lg:mx-2 my-2'>
                                <div className='flex justify-between mx-2'>
                                    <span className='text-xl font-semibold'>Documents</span>
                                    <span className='rounded-full'><img src="/Leftarrowblack.png" className='bg-white p-2 rounded-full' alt="" /></span>
                                </div>
                                <h1 className='text-5xl font-extrabold pt-5 pl-3'>05</h1>
                            </div>
                            <div className='md:w-1/3 mx-2 bg-[white] text-black p-6 rounded-[44px] h-[183px] lg:mx-2 my-2'>
                                <div className='flex justify-between mx-2'>
                                    <span className='text-xl font-semibold'>Invoices</span>
                                    <span className='rounded-full'><img src="/Leftarrowblack.png" className='bg-white p-2 rounded-full' alt="" /></span>
                                </div>
                                <h1 className='text-5xl font-extrabold pt-5 pl-3'>05</h1>
                            </div>
                            <div className='md:w-1/3 mx-2 bg-[white] text-black p-6 rounded-[44px] h-[183px] lg:mx-2 my-2'>
                                <div className='flex justify-between mx-2'>
                                    <span className='text-xl font-semibold'>Projects</span>
                                    <span className='rounded-full'><img src="/Leftarrowblack.png" className='bg-white p-2 rounded-full' alt="" /></span>
                                </div>
                                <h1 className='text-5xl font-extrabold pt-5 pl-3'>05</h1>
                            </div>
                        </div>
                        <div className='lg:flex'>
                            <div className='lg:w-2/3 h-auto max-h-[400px] mb-4 relative'>
                                <h5 className='text-white text-lg font-semibold mx-4 mt-4 my-2'>Recent Activity</h5>
                                <div className='h-[320px] overflow-y-auto scrollbar-hidden rounded-[44px]' >
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
                                    {
                                        recentActivity.map((project, i) => {
                                            const targetScale = 1 - ((recentActivity.length - i) * 0.01);
                                            return <RecentActivity ref={container} key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} target={targetScale} />
                                        })
                                    }
                                </div>
                            </div>

                            <div className='lg:w-1/3 mx-2 lg:h-auto'>
                                <h1 className='text-xl mx-2 font-semibold text-white my-2'>Notes</h1>
                                <div className='bg-white min-h-40 lg:h-[85%] my-auto rounded-[44.3px] '>
                                    <div className='flex justify-end mr-4'>
                                        <div className='flex p-2'>
                                            <div className='p-2'><img src="/TripleDot.png" alt="" /></div>
                                            <div className='p-2'><img src="/note.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ContactDetail