import React from "react";
import Examination from "./examination";
import liver  from '../assets/images/Group 3514.png'
import Hormonal from '../assets/images/Group 3513.png'
import General from '../assets/images/Group 3512.png'
import Heart from '../assets/images/Group 3517.png'
import Diabet from '../assets/images/Group 3516.png'
import Autoimmunity from '../assets/images/Group 3515 (1).png'
import Infections from '../assets/images/Group 3518 (1).png'
import Pregnancy from '../assets/images/Group 3519.png'
import Desired from  '../assets/images/Group 3520.png'
import { useNavigate } from "react-router-dom";
const ClassificationOfTests = ()=>{
    const toGeneral = useNavigate()
    return(
        <div className="w-[90%] gap-2 mt-10 mx-auto grid grid-cols-12">
            <Examination onClick={() => toGeneral('/generaltest')} imgSrc={General}></Examination>
            <Examination imgSrc={Hormonal}></Examination>
            <Examination imgSrc={liver}></Examination>
            <Examination imgSrc={Heart}></Examination>
            <Examination imgSrc={Diabet}></Examination>
            <Examination imgSrc={Autoimmunity}></Examination>
            <Examination imgSrc={Infections}></Examination>
            <Examination imgSrc={Pregnancy}></Examination>
            <Examination imgSrc={Desired}></Examination>
        </div>
    )
}
export default ClassificationOfTests;