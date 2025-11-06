import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const DoctorsCard = () => {
    const [isDragging, setIsDragging] = useState(false);
    useEffect(()=>{
        console.log(isDragging)
    },[isDragging])
    return (
        <div className={`${isDragging ? 'w-full':"w-[90%]"} mx-auto mt-5`}>
            <Swiper
                spaceBetween={16}
                slidesPerView={"auto"}
                grabCursor={true}
                onSliderMove={() => setIsDragging(true)}
                onTransitionEnd={() => setIsDragging(false)}
                onTouchEnd={() => setIsDragging(false)}
                onMouseUp={() => setIsDragging(false)}
            >
                {[
                    { name: "الناز توکلی", exp: "روانشناس" },
                    { name: "مریم میرآخوری", exp: "دکترای تخصصی روانشناسی و مشاوره" },
                    { name: "مریم میرآخوری", exp: "دکتری تخصصی" },
                    { name: "مریم میرآخوری", exp: "قلب و عروق" },
                ].map((doctor, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                        <div
                            className={`transition-transform duration-300 ${isDragging ? "scale-105" : "scale-100"
                                }`}
                        >
                            <DoctorCard profileName={doctor.name} profileExp={doctor.exp} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default DoctorsCard;
