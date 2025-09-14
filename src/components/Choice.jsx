import React, { useState } from 'react'
import DeActive from '../assets/images/Group 3506.png'
import Active from '../assets/images/Group 3505.png'
const Choice = () => {
    const[active,setActive]=useState('')
    const Data = [
        { id: 'emergency', title: 'اورژانسی  285.000 تومان', des1: 'مبلغ نمونه گیری و هزینه انجام آزمایشات شما', des2: '6 صبح تا 12 شب / انتظار 30 دقیقه تا 4 ساعت بعد از ثبت' },
        { id: 'Timekeeper', title: 'زماندار  285.000 تومان', des1: 'مبلغ نمونه گیری و هزینه انجام آزمایشات شما', des2: '6 صبح تا 12 شب / انتظار 30 دقیقه تا 4 ساعت بعد از ثبت' },

    ]
    return (
        <div className='w-[90%] mx-auto'>
            {Data.map(item => {
                return (
                    <div key={item.id} className="flex items-center gap-4 my-10">
                        <img onClick={()=>setActive(item.id)} src={active === item.id ? Active : DeActive} alt={item.title} />
                        <div>
                            <div className='text-bold vazir-medium text-[16px]'>{item.title}</div>
                            <div className='text-bold vazir-medium my-2 text-[#757575] text-[14px]'>{item.des1}</div>
                            <div className='text-bold vazir-medium text-[#757575] text-[14px]'>{item.des2}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Choice