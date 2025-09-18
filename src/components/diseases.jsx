import React from 'react'
import Rectangle from '../assets/images/Rectangle 5619.png'
import Expertise from './expertise'
import Disease from './disease'
import HeaderDiseases from './diseasesHeader'
const DiseasesContainer = () => {
    return (
       <div>
            <HeaderDiseases></HeaderDiseases>
            <div className='w-[90%] mx-auto grid grid-cols-10 gap-[0.3rem] mt-5'>
                <Disease src={Rectangle} name={'زگیل تناسلی'}></Disease>
                <Disease src={Rectangle} name={'تخمدان'}></Disease>
                <Disease src={Rectangle} name={'کیست مویی'}></Disease>
                <Disease src={Rectangle} name={'سرطان سینه'} ></Disease>
                <Disease src={Rectangle} name={'تیروئید'} ></Disease>
                <Disease src={Rectangle} name={'ریزش مو'} ></Disease>
                <Disease src={Rectangle} name={'دیابت'} ></Disease>
                <Disease src={Rectangle} name={'اسیلومعده'} ></Disease>
                <Disease src={Rectangle} name={'آلزامیر'} ></Disease>
                <Disease src={Rectangle} name={'بیشتر'} ></Disease>
            </div>
       </div>
    )
}
export default DiseasesContainer;