import { useState } from 'react'
import Cross from '../assets/images/cross.png'
const Medicine = ({medicineName,medicineDescription,delDrag})=>{
    return(
        <div className="w-[90%] mx-auto flex justify-between items-center my-5">
             <div className='vazir-medium'>
                <div className='font-bold text-black text-[16px]'>
                    {medicineName}
                </div>
                <div className='text-[14px] '>
                    توضیحات {medicineDescription.slice(0,28)+" ..."}
                </div>
             </div>
             <div>
                <img onClick={delDrag} src={Cross}></img>
             </div>
        </div>
    )
}
export default Medicine