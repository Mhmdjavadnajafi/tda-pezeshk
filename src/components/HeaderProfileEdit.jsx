import React from 'react'
import ProfileIMG from './ProfileImg'
import PROFILE from '../assets/images/Ellipse 41.png'
const HeaderEditProfile = () => {
    return (
        <div className='w-full gap-6 mx-auto flex items-center'>
            <ProfileIMG src={PROFILE}></ProfileIMG>
            <div className='vazir-medium text-[#5F5F5F]'>تصویر پروفایل</div>
        </div>
    )
}
export default HeaderEditProfile;