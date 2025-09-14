import React from 'react'
import Expertise from './expertise';
import Rectangle from '../assets/images/Rectangle 5619.png'
import DoctorsContainer from './DoctorsContainer';
const ExpertisesMedicalContainer = () => {
    return (
        <div className='grid grid-cols-10 gap-3 w-[90%] mx-auto mt-5'>
            <Expertise src={Rectangle} name={'همه'}></Expertise>
            <Expertise src={Rectangle} name={'ارتوپد'}></Expertise>
            <Expertise src={Rectangle} name={'جراح'}></Expertise>
            <Expertise src={Rectangle} name={'ترمیم'} ></Expertise>
            <Expertise src={Rectangle} name={'زیبایی'} ></Expertise>
        </div>
    )
}
export default ExpertisesMedicalContainer;