import React from 'react'
import Expertise from './expertise';
import Rectangle from '../assets/images/Rectangle 5619.png'
const ExpertisesContainer = ()=>{
    return(
        <div className='grid grid-cols-10 gap-3 w-full mt-5'>
            <Expertise src={Rectangle} name={'ارتوپد'}></Expertise>
            <Expertise src={Rectangle} name={'جراح'}></Expertise>
            <Expertise src={Rectangle} name={'ترمیم'}></Expertise>
            <Expertise src={Rectangle} name={'زیبایی'} ></Expertise>
            <Expertise src={Rectangle} name={'روانشناس'} ></Expertise>
        </div>
    )
}
export default ExpertisesContainer;