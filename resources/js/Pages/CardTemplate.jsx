import React from 'react'

const CardTemplate = () => {
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
        }
    ]
    return (
        <div className='w-2/3 max-h-[400px]'>
            {recentActivity.map((el) => (
                <div className='h-[175px] bg-white rounded-[44px] my-4 mx-4 p-4 sticky top-10'>
                    <div className='flex'>
                        <div><img src={el.image} alt="" /></div>
                        <h4 className='font-semibold text-lg'>{el.heading} {el.time}</h4>
                    </div>
                    <p>{el.body} <button>Read More</button></p>
                    <button>
                        <div><img src="/BlueMail.png" alt="" /></div>
                        <div>Open Inbox</div>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CardTemplate