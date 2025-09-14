import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import DoctorCard from "./DoctorCard";
const DoctorsCard = () => {
    return (
        <div className="w-[100%] mx-auto mt-5">
            <Swiper
                spaceBetween={16} 
                slidesPerView={"auto"} 
                grabCursor={true} 
            >
                <SwiperSlide className="!w-auto">
                    <DoctorCard profileName={'الناز توکلی'} profileExp={'روانشناس'} />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <DoctorCard profileName={"مریم میرآخوری"} profileExp={'دکترای تخصصی روانشناسی و مشاوره'} />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <DoctorCard profileName={"مریم میرآخوری"} profileExp={"دکتری تخخصی"}  />
                </SwiperSlide>
                <SwiperSlide className="!w-auto">
                    <DoctorCard profileName={"مریم میرآخوری"} profileExp={"قلب و عروق"} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DoctorsCard;
