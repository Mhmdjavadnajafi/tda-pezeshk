import React from "react";
import RadarCircle from "./Radar";
import DoctorOne from '../assets/images/پزشک زن.jpg'
import StarBox from "./StarBox";
import ExperienceBox from "./ExperienceBox";
const DoctorCard = ({ profileImg, profileStar, profileExperience }) => {
    return (
        <div className="h-[220px] w-[180px] rounded-xl flex items-center shadow bg-white">
            <div className="flex w-[90%] gap-2 mx-auto px-5 items-center justify-center">
                <div className="relative">
                    <RadarCircle />
                    <div className="w-[76px] h-[76px] border border-blue-400 rounded-full">
                        <img className="h-[76px] rounded-full w-[76px]" src={DoctorOne}></img>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start">
                    <StarBox></StarBox>
                    <ExperienceBox></ExperienceBox>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
