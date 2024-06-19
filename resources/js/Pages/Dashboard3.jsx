import React, { useEffect, useRef, useState } from 'react'
import BarChart2 from './Vissulization/Bar Chart/BarChart2'
// import BarChart2 from '../Vissulization/Bar Chart/BarChart2'

const Dashboard3 = ({ auth }) => {

    const [clientDiv, setClientDiv] = useState(0)
    const client = useRef(null)
    const [myLineUP, setMyLineUp] = useState({ task: '0', ideas: '05', notes: '04', sharedFile: '10' })
    const [select, setSelect] = useState('overview')
    const [invoicesPaid, setInvoicesPaid] = useState(67);

    const invoiceRef = useRef();
    const barChartref = useRef();



    useEffect(() => {
        setClientDiv(client?.current?.offsetWidth);
        console.log(client, "the width")
        setInvoicesPaid(invoiceRef?.current?.offsetWidth);
        console.log(invoicesPaid, "invoices paid width")

        console.log(barChartref, 'this is the barchar ref')
    }, [])

    const dateColorSelector = useState(() => {

    })

    const projects = {
        new: 30,
        onGoing: 50,
        completed: 20
    }

    const clients = {
        leads: 30,
        prospects: 50,
        clients: 20
    }


    return (
        <div className='lg:w-11/12 w-full mx-auto w-full mt-1 lg:mt-8 mb-32 lg:mb-2'>


            <div className='lg:flex mx-2 lg:my-4'>
                <h1 className='lg:w-1/2 flex flex-col text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl my-auto px-1'>
                    <h1>Hi {auth.user.name} , here's an</h1>
                    <h1>Overview of Your bussiness</h1>
                </h1>
                <div className='lg:w-1/2 w-full lg:pr-8'>
                    <div className='md:flex justify-around w-full'>
                        <div ref={client} className='bg-[#C6F432] md:w-[48%] rounded-3xl py-6 p-4 my-2 w-full mx-auto'>
                            <div className='flex justify-between w-full'>
                                <h5 className='text-xl font-semibold my-auto'>Clients</h5>
                                <button className='flex border border-gray-500 py-1 px-3 rounded-full text-sm'><span className='my-auto'>View All</span> <div className='my-atuo'><img src='./RightBlackArrow.png' /></div></button>
                            </div>
                            <h4 className='text-2xl font-semibold my-3'>1,252</h4>
                            <div className='flex w-full'>
                                <div style={{ width: clientDiv * projects.new * 0.01 }} className='h-2 bg-[#FF6C4B] rounded-full mx-1'></div>
                                <div style={{ width: clientDiv * projects.onGoing * 0.01 }} className='h-2 bg-[#FFFFFF] rounded-full mx-1'></div>
                                <div style={{ width: clientDiv * projects.completed * 0.01 }} className='h-2 bg-[#000000] rounded-full mx-1'></div>
                            </div>
                            <div className='flex justify-around mt-2'>
                                <div className='flex items-center'>
                                    <div className='bg-[#FF6C4B] h-2 w-2 rounded-full mr-2'></div>
                                    <div className='text-xs'>leads</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-[#FFFFFF] h-2 w-2 rounded-full mr-2'></div>
                                    <div className='text-xs'>leads</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-[#000000]  h-2 w-2 rounded-full mr-2'></div>
                                    <div className='text-xs'>leads</div>
                                </div>
                            </div>
                        </div>
                        <div ref={client} className='bg-white md:w-[48%] rounded-3xl py-6 p-4 lg:ml-4 my-2 w-full mx-auto'>
                            <div className='flex justify-between w-full'>
                                <h5 className='text-xl font-semibold my-auto'>Projects</h5>
                                <button className='flex border border-gray-500 py-1 px-3 rounded-full text-sm'><span className='my-auto'>View All</span> <div className='my-atuo'><img src='./RightBlackArrow.png' /></div></button>
                            </div>
                            <h4 className='text-2xl font-semibold my-3'>1,252</h4>
                            <div className='flex w-full'>
                                <div style={{ width: clientDiv * projects.new * 0.01 }} className='h-2 bg-[#000000] rounded-full mx-1'></div>
                                <div style={{ width: clientDiv * projects.onGoing * 0.01 }} className='h-2 bg-[#FF6C4B] rounded-full mx-1'></div>
                                <div style={{ width: clientDiv * projects.completed * 0.01 }} className='h-2 bg-[#C6F432] rounded-full mx-1'></div>
                            </div>
                            <div className='flex justify-around mt-2'>
                                <div className='flex items-center'>
                                    <div className='bg-[#000000] h-2 w-2 rounded-full mr-2'></div>
                                    <div className='text-xs'>leads</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-[#FF6C4B] h-2 w-2 rounded-full mr-2'></div>
                                    <div className='text-xs'>leads</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-[#C6F432]  h-2 w-2 rounded-full mr-2'></div>
                                    <div className='text-xs'>leads</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:flex mx-2 lg:mx-8 mt-2'>
                <div className='md:flex lg:w-1/2'>
                    <div className='md:w-[48%] w-full mx-auto bg-white rounded-3xl py-7 px-6 my-2'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold'>New Leads</h3>
                            <div className='flex my-auto rounded-full bg-gray-300 p-2'><img src="./Leftarrow.png" alt="" /></div>
                        </div>
                        <div className='flex items-center my-2'>
                            <h3 className='text-2xl font-semibold mx-2'>630</h3>
                            <div className='bg-[#A9E89F] w-fit px-1 flex items-center rounded-full'>
                                <div className='mx-1 '><img src="greenInc.png" alt="" /></div>
                                <div>20%</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-600 text-sm'>Vs last month:</span>
                            <span>510</span>
                        </div>
                    </div>
                    <div className='md:w-[48%] w-full mx-auto bg-white rounded-3xl py-7 px-6 my-2'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold'>Ongoing Projects</h3>
                            <div className='flex my-auto rounded-full bg-gray-300 p-2'><img src="./Leftarrow.png" alt="" /></div>
                        </div>
                        <div className='flex items-center my-2'>
                            <h3 className='text-2xl font-semibold mx-2'>25</h3>
                            <div className='bg-[#A9E89F] w-fit px-1 flex items-center rounded-full'>
                                <div className='mx-1 '><img src="greenInc.png" alt="" /></div>
                                <div>20%</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-600 text-sm'>Vs last month:</span>
                            <span>510</span>
                        </div>
                    </div>
                </div>
                <div className='md:flex lg:w-1/2 md:mt-2 lg:mt-0'>
                    <div className='md:w-[48%] w-full mx-auto bg-white rounded-3xl py-7 px-6 my-2'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold'>Total Profit</h3>
                            <div className='flex my-auto rounded-full bg-gray-300 p-2'><img src="./Leftarrow.png" alt="" /></div>
                        </div>
                        <div className='flex items-center pl-1 my-2'>
                            <h3 className='text-2xl font-semibold mx-2'>$ 50,213.54</h3>
                            <div className='bg-[#A9E89F] w-fit px-1 flex items-center rounded-full'>
                                <div className='mx-1 '><img src="greenInc.png" alt="" /></div>
                                <div>20%</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-600 text-sm'>Vs last month:</span>
                            <span>510</span>
                        </div>
                    </div>
                    <div className='md:w-[48%] w-full mx-auto bg-white rounded-3xl py-7 px-6 my-2'>
                        <div className='flex justify-between'>
                            <h3 className='text-xl font-semibold'>Expenses</h3>
                            <div className='flex my-auto rounded-full bg-gray-300 p-2'><img src="./Leftarrow.png" alt="" /></div>
                        </div>
                        <div className='flex items-center pl-1 my-2'>
                            <h3 className='text-2xl font-semibold mx-2'>$12,331</h3>
                            <div className='bg-[#F19B89] w-fit px-1 flex items-center rounded-full'>
                                <div className='mx-1 '><img src="orangeDec.png" alt="" /></div>
                                <div>20%</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-gray-600 text-sm'>Vs last month:</span>
                            <span>510</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:flex mx-2 lg:mx-4 mt-2'>
                <div ref={invoiceRef} className='lg:w-[48%]  lg:ml-4 mt-2'>
                    <div className='inset-0 py-4 px-2 rounded-3xl bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl'>
                        <div className='w-full flex md:px-4 xl:px-8'>
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
                                <div className='flex items-center'>
                                    <div className='text-[#C6F432] font-semibold  text-lg md:text-3xl mr-2'>$15,410.65</div>
                                    <div className='text-white md:font-semibold text-xs md:text-sm '>
                                        <div>$4678.90</div>
                                        <div className='-mt-1'>Outstanding Amount</div>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-white text-xs md:text-md flex items-center md:px-2 px-1 rounded-full h-fit my-auto'>
                                <h5>View All</h5>
                                <h5><img src="./RightBlackArrow.png" alt="" /></h5>
                            </button>
                        </div>
                    </div>
                    <div className='md:flex mt-4'>
                        <div className='flex justify-between md:w-[55%] '>
                            <div className='bg-[#FF6C4B] w-[48%] rounded-3xl p-2'>
                                <div className='flex justify-between'>
                                    <h2 className='text-xl px-3 py-2 font-semibold text-white'><div className='-m-1'>Total</div><div className='-m-1'>pending</div> <div className='-m-1'> Task</div></h2>
                                    <div className='p-2'><img src="./Voice.png" alt="" /></div>
                                </div>
                                <h3 className='text-lg text-white px-2'>Assigned to you</h3>
                                <h3 className='font-extrabold text-3xl text-white px-2'>05</h3>
                            </div>
                            <div className='bg-white tex-black w-[48%] rounded-3xl'>
                                <div className='flex justify-between mt-1'>
                                    <h2 className='text-xl px-3 py-2 font-semibold'><div className='-m-1'>Your</div><div className='-m-1'>Productivity</div></h2>
                                    <div className='p-2 pt-2'><img src="./Voice2.png" alt="" /></div>
                                </div>
                                <h3 className='text-lg px-2 text-gray-600'>Super Productive Week</h3>
                                <h3 className='font-extrabold text-3xl px-2'>86%</h3>
                            </div>

                        </div>
                        <div ref={barChartref} className='md:w-[44%] mx-auto ml-3 bg-white rounded-3xl h-auto'>
                            <div className='flex justify-between items-center px-4 mt-2'>
                                <div>
                                    <h4 className='text-2xl font-semibold flex'>Pulse <div className='h-2 w-2 mt-1 ml-2 rounded-full bg-red-800'></div></h4>
                                    <p className='text-xs text-gray-400'>View User Active Timeframe</p>
                                </div>
                                <div>
                                    <img src="./Leftarrow.png" className='bg-[#00000033] p-2 rounded-full' alt="" />
                                </div>
                            </div>
                            <BarChart2 props={barChartref} />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[48%] ml-4'>
                    <div className='mx-auto rounded-3xl inset-0 bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl mt-2 p-6 '>
                        <div className='flex justify-between mt-4'>
                            <h3 className='text-white text-2xl'>My Line Up</h3>
                            <button className='flex rounded-full items-center bg-white px-2 py-1'>
                                <h5 className='font-semibold'>View all</h5>
                                <div><img src="./Leftarrowblack.png" alt="" /></div>
                            </button>
                        </div>

                        <div className='flex text-white justify-between mx-1 my-4'>
                            <button
                                className={`${select === 'task' ? ' border-b-2 border-whtie' : ''} w-1/5 flex justify-center items-center text-xs md:text-md`}
                                onClick={() => {
                                    setSelect('task');
                                    setMyLineUp((prevLineUp) => ({
                                        ...prevLineUp,
                                        task: '0'
                                    }));
                                }}
                            >
                                <h5 className='md:mx-2'>Tasks</h5>
                                <h5 className={`${myLineUP.task > 0 ? '' : 'hidden'} bg-transparent py-1 px-2 text-xxs md:text-xs font-extralight rounded-full bg-[#252620]`}>{myLineUP.task}</h5>
                            </button>
                            <button
                                className={`${select === 'ideas' ? 'border-b-2 border-whtie' : ''} w-1/5 flex justify-center items-center text-xs md:text-md`}
                                onClick={() => {
                                    setSelect('ideas');
                                    setMyLineUp((prevLineUp) => ({
                                        ...prevLineUp,
                                        ideas: '0'
                                    }));
                                }}
                            >
                                <h5 className='md:mx-2'>Ideas</h5>
                                <h5 className={`${myLineUP.ideas > 0 ? '' : 'hidden'} bg-transparent p-1 text-xxs md:text-xs font-extralight rounded-full bg-[#252620]`}>{myLineUP.ideas}</h5>
                            </button>
                            <button
                                className={`${select === 'notes' ? 'w-1/5 border-b-2 border-whtie' : ''} py-1 w-1/5 flex justify-center itmes-center text-xs md:text-md`}
                                onClick={() => {
                                    setSelect('notes');
                                    setMyLineUp((prevLineUp) => ({
                                        ...prevLineUp,
                                        notes: '0'
                                    }));
                                }}
                            >
                                <h5 className='md:mx-2'>Notes</h5>
                                <h5 className={`${myLineUP.notes > 0 ? '' : 'hidden'} bg-transparent p-1 text-xxs md:text-xs font-extralight rounded-full bg-[#252620]`}>{myLineUP.notes}</h5>
                            </button>
                            <button
                                className={`${select === 'sharedFile' ? 'w-1/5 border-b-2 border-whtie' : ''} w-1/5 flex justify-center items-center text-xs md:text-md`}
                                onClick={() => {
                                    setSelect('sharedFile');
                                    setMyLineUp((prevLineUp) => ({
                                        ...prevLineUp,
                                        sharedFile: '0'
                                    }));
                                }}
                            >
                                <h5 className='md:mx-2'>sharedFile</h5>
                                <h5 className={`${myLineUP.sharedFile > 0 ? '' : 'hidden'} bg-transparent p-1 text-xxs md:text-xs font-extralight rounded-full bg-[#252620]`}>{myLineUP.sharedFile}</h5>
                            </button>
                            <div className='hidden md:block w-1/5'>

                            </div>
                        </div>


                        <div className='mt-7'>
                            <div className='flex items-center justify-between rounded-lg md:px-4 py-3 bg-white p-2 mt-4'>
                                <div className='flex items-center text-white text-sm font-semibold p-1 w-fit rounded-lg bg-[#EAB600] w-1/5 mr-1'>
                                    <div className='mx-1'><img src="./Alert.png" alt="" /></div>
                                    <div className='hidden md:block'>Medium</div>
                                </div>
                                <p className='font-semibold overflow-clip flex text-xs md:text-md w-3/5'><div className='ml-1'>Video</div> <div className='ml-1'>Conference</div> <div className='ml-1'>Canada</div> <div className='ml-1'>Team</div></p>
                                <div className='text-red-600 text-xxs w-1/5 ml-2'>1 day Ago</div>
                                <div className='hidden md:block'><img src="./TripleDot.png" alt="" /></div>
                            </div>
                            <div className='flex items-center justify-between rounded-lg md:px-4 py-3 bg-white p-2 mt-4'>
                                <div className='flex items-center text-white text-sm font-semibold p-1 w-fit rounded-lg bg-[#EAB600] w-1/5 mr-1'>
                                    <div className='mx-1'><img src="./Alert.png" alt="" /></div>
                                    <div className='hidden md:block'>Medium</div>
                                </div>
                                <p className='font-semibold overflow-clip flex text-xs md:text-md w-3/5'><div className='ml-1'>Video</div> <div className='ml-1'>Conference</div> <div className='ml-1'>Canada</div> <div className='ml-1'>Team</div></p>
                                <div className='text-red-600 text-xxs w-1/5 ml-2'>1 day Ago</div>
                                <div className='hidden md:block'><img src="./TripleDot.png" alt="" /></div>
                            </div>
                            <div className='flex items-center justify-between rounded-lg md:px-4 py-3 bg-white p-2 mt-4'>
                                <div className='flex items-center text-white text-sm font-semibold p-1 w-fit rounded-lg bg-[#EAB600] w-1/5 mr-1'>
                                    <div className='mx-1'><img src="./Alert.png" alt="" /></div>
                                    <div className='hidden md:block'>Medium</div>
                                </div>
                                <p className='font-semibold overflow-clip flex text-xs md:text-md w-3/5'><div className='ml-1'>Video</div> <div className='ml-1'>Conference</div> <div className='ml-1'>Canada</div> <div className='ml-1'>Team</div></p>
                                <div className='text-red-600 text-xxs w-1/5 ml-2'>1 day Ago</div>
                                <div className='hidden md:block'><img src="./TripleDot.png" alt="" /></div>
                            </div>

                        </div>
                    </div>
                    {/* <div className='felx justify-between'> */}
                    {/* <div className='w-full'></div> */}
                    <div className='flex w-fit flex-end fixed lg:relative lg:bottom-0 lg:right-0 mt-2 left-1/2 transform -translate-x-1/2 bottom-20 lg:mb-12  text-white font-semibold  p-1 rounded-full bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl'>
                        <button onClick={() => setSelect('overview')} className={`${select === 'overview' ? 'bg-white text-black' : ''} mx-1 p-2 rounded-full `}>Overview</button>
                        <button onClick={() => setSelect('analytics')} className={`${select === 'analytics' ? 'bg-white text-black' : ''} mx-1 p-2 rounded-full `}>Analytics</button>
                        <button onClick={() => setSelect('activity')} className={`${select === 'activity' ? 'bg-white text-black' : ''} mx-1 p-2 rounded-full `}>Activity</button>
                        <button onClick={() => setSelect('agents')} className={`${select === 'agents' ? 'bg-white text-black' : ''} mx-1 p-2 rounded-full `}>Agents</button>
                    </div>
                    {/* </div> */}
                </div>
            </div>




        </div>
    )
}

export default Dashboard3