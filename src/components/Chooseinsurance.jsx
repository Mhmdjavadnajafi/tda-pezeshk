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
        <div className='w-full mx-autu'>
            <CompleteTitle title={'انتخاب بیمه'} />
            <div className='w-[90%] mx-auto flex gap-2 items-stretch justify-evenly mt-3'>
                {insuranceSelector.map((insurance) => (
                    <div
                        onClick={() => setActive(insurance.insuranceKey)}
                        className={`text-sm text-[#898989] rounded-lg px-4 py-2 flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis ${active === insurance.insuranceKey ? 'bg-blue-200 text-blue-700' : 'bg-gray-200'} vazir-medium`}
                        key={insurance.insuranceKey}
                    >
                        {insurance.insuranceName}
                    </div>
                ))}
            </div>

           <div className='w-[90%] mx-auto'>
            <img src={Banner}></img>
           </div>
        </div>
    )
}
export default Chooseinsurance