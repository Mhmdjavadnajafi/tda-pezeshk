import React from 'react'
import Rectangle from '../assets/images/Rectangle 5619.png'
import Expertise from './expertise'
import Disease from './disease'
import HeaderDiseases from './diseasesHeader'
const DiseasesContainer = () => {
    return (
       <div>
            <HeaderDiseases></HeaderDiseases>
            <div className='w-[90%] mx-auto flex flex-wrap flex-grow items-center gap-[0.3rem] mt-5'>
               <div className='flex flex-grow w-full'>
                    <Disease src={Rectangle} name={'سرما خوردگی'}></Disease>
                    <Disease src={Rectangle} name={'گلودرد'}></Disease>
                    <Disease src={Rectangle} name={'سینوزیت'}></Disease>
                    <Disease src={Rectangle} name={'فشار خون'} ></Disease>
                    <Disease src={Rectangle} name={'دیابت'} ></Disease>
                    <Disease src={Rectangle} name={'کمر درد'} ></Disease>
                    <Disease src={Rectangle} name={'زانو درد'} ></Disease>
                    <Disease src={Rectangle} name={'اضطراب و افسردگی'} ></Disease>
                    <Disease src={Rectangle} name={'سردرد و میگرن'} ></Disease>
                    <Disease src={Rectangle} name={'چاقی و اضافه وزن'} ></Disease>
                    <Disease src={Rectangle} name={'سوءهاضمه'} ></Disease>
               </div>
                <Disease src={Rectangle} name={'ریفلاکس'} ></Disease>
                <Disease src={Rectangle} name={'زخم معده'} ></Disease>
                <Disease src={Rectangle} name={'عفونت ادراری'} ></Disease>
                <Disease src={Rectangle} name={'بیماری‌های قلبی'} ></Disease>
                <Disease src={Rectangle} name={'درد قفسه سینه'} ></Disease>
                <Disease src={Rectangle} name={'آریتمی'} ></Disease>
                <Disease src={Rectangle} name={'آلرژی‌'} ></Disease>
                <Disease src={Rectangle} name={'آسم'} ></Disease>
                <Disease src={Rectangle} name={'چربی خون'} ></Disease>
                <Disease src={Rectangle} name={'آرتروز'} ></Disease>
                <Disease src={Rectangle} name={'تیروئید'} ></Disease>
                <Disease src={Rectangle} name={'پوکی استخوان'} ></Disease>
                <Disease src={Rectangle} name={'درد مفاصل'} ></Disease>
            </div>
       </div>
    )
}
export default DiseasesContainer;