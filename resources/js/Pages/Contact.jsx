import React from 'react'
import dummyData from './dummyData'
// import '../../App.css'

const Contact = () => {

  console.log("this is teh dummy data", dummyData)
  return (
    <div className='bg-white mb-4 rounded-3xl  xl:mr-8 h-screen lg:h-auto overflow-y-scroll w-full lg:w-11/12 container'>
      <div className='flex justify-between mx-8 my-8'>
        <div className='text-gray-600'><span className='font-bold text-lg '>Contacts </span><span>({dummyData.length})</span></div>
        <div className='text-gray-600 flex items-center '><span className='font-bold text-lg mr-2 '>Filer</span><span><img src="./Filter.png" alt="" /></span></div>
      </div>
      {/* <div className=''>
        {
          dummyData.map((obj)=>(
            <table className='flex justify-evenly'>
                <td className='flex'>
                  <div><img src="./BlackGirl.png" alt="" /></div>
                  <div>{obj.name}</div>
                </td>
                <td>{obj.contactNumber}</td>
                <td>{obj.email}</td>
                <td>{obj.stage}</td>
                <td>{obj.addedOn}</td>
                <td>{obj.addedBy}</td>
                <td>{obj.actions}</td>
            </table>  
          ))
        }

      </div> */}
      <div className='flex justify-between lg:text-sm xl:text-md mx-1 overflow-hidden '>
        <div className='borber border-black w-full'>
          <div className='md:px-8 px-4 py-2 md:text-lg text-sm text-gray-800 font-semibold'>Name</div>
          {dummyData.map((obj) => (
            <div className='border-b border-black py-3 font-semibold text-gray-800 text-xs md:text-md md:px-6 px-2'>
              <div className='flex h-[34px]'>
                <div className='mr-2 flex items-center'><img src="./BlackGirl.png" alt="" /></div>
                <div>{obj.name}</div>
              </div>
            </div>
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
              <img src="./andrew.png" className='h-[34px] ml-4' alt="" />
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
  )
}

export default Contact