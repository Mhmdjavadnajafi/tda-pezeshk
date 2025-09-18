import React from "react";
import RadarCircle from "./Radar";
import DoctorOne from '../assets/images/پزشک زن.jpg'
import StarBox from "./StarBox";
import ExperienceBox from "./ExperienceBox";
import DoctorName from "./DoctorName";
import DoctorExp from "./expertiseDoctor";
import StartCounseling from "./StartCounseling";
import Communication from "./communication";
import { useNavigate } from "react-router-dom";
const DoctorCard = ({ profileImg, profileStar, profileExperience,profileName,profileExp }) => {
    const navigate = useNavigate('')
    return (
        <div className="h-[290px] w-[200px] rounded-xl flex flex-col justify-center shadow bg-white">
            <div className="flex w-[80%] gap-4 mx-auto px-5 items-center justify-center">
                <div className="relative">
                    <RadarCircle />
                    <div className="w-[76px] h-[76px] border border-blue-400 rounded-full">
                        <img className="h-[70px] rounded-full w-[70px]" src={DoctorOne}></img>
                    </div>
                </div>
                <div className="w-full flex-col items-end" dir="ltr">
                    <StarBox></StarBox>
                    <ExperienceBox></ExperienceBox>
                </div>
            </div>
            <DoctorName name={profileName}></DoctorName>
            <DoctorExp exp={profileExp}></DoctorExp>
            <Communication></Communication>
            <StartCounseling onClick={()=>navigate('/doctor')}></StartCounseling>
        </div>
    );
};

export default DoctorCard;
