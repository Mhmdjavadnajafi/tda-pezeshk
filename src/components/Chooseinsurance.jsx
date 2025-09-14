import React, { useState } from 'react'
import CompleteTitle from './CompleteTitle'
import Banner from '../assets/images/Group 3736 (1).png'
const Chooseinsurance = () => {
    const [active, setActive] = useState('free')
    const insuranceSelector = [
        { insuranceName: "آزاد", insuranceKey:"free"},
        { insuranceName: "نیروهای مسلح", insuranceKey: "armedforces" },
        { insuranceName: "سلامت", insuranceKey: "healty" },
        { insuranceName: "تامین اجتماعی", insuranceKey: "socialsecurity" },
    ]

    return (
        <div className='w-full mx-auto mt-10'>
            <CompleteTitle title={'انتخاب بیمه'} />
           <div className='w-[90%] mx-auto flex gap-1 items-center justify-evenly mt-3'>
                {insuranceSelector.map((insurance) => (
                    <div onClick={()=>{
                        setActive(insurance.insuranceKey)
                    }} className={`text-md text-[#898989] px-2 rounded-xl py-2 ${active === insurance.insuranceKey ? 'bg-blue-200' :"bg-gray-200"} vazir-medium`} key={insurance.insuranceKey}>{insurance.insuranceName}</div>
                ))}
           </div>
           <div className='w-[90%] mx-auto'>
            <img src={Banner}></img>
           </div>
        </div>
    )
}
export default Chooseinsurance