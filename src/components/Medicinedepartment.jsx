import React from 'react'
import Expertise from './expertise';
import Rectangle from '../assets/images/Rectangle 5619.png'
import Depatment from './deparment';
import Drug_registration from '../assets/images/ثبت دارو.png'
import With_prescription from '../assets/images/نسخه دارم.png'
import No_prescription from '../assets/images/دارو بدون نسخه.png'
import { useNavigate } from 'react-router-dom';
const Medicinedepartment = () => {
    const navigate = useNavigate()
    return (
        <div className="w-[90%] gap-2 mt-10 mx-auto grid grid-cols-12">
            <Depatment onClick={() => navigate('/Drugregistration')} imgSrc={Drug_registration}></Depatment>
            <Depatment onClick={() => navigate('/Drugregistration')} imgSrc={With_prescription}></Depatment>
            <Depatment onClick={() => navigate('/Drugregistration')} imgSrc={No_prescription}></Depatment>
        </div>
    )
}
export default Medicinedepartment;