import React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { deepOrange, deepPurple, blue } from "@mui/material/colors";

import StarBox from "./StarBox";
import ExperienceBox from "./ExperienceBox";
import DoctorName from "./DoctorName";
import DoctorExp from "./expertiseDoctor";
import StartCounseling from "./StartCounseling";
import Communication from "./communication";

const DoctorCard = ({
    profileImg,
    profileStar,
    profileExperience,
    profileName,
    profileExp
}) => {
    const navigate = useNavigate();

    // انتخاب رنگ حرفه‌ای برای Avatar اگر تصویر موجود نباشد
    const getAvatarColor = () => {
        const colors = [deepOrange[500], deepPurple[500], blue[500]];
        return colors[profileName?.charCodeAt(0) % colors.length] || deepOrange[500];
    };

    return (
        <div className="h-[290px] w-[200px] rounded-xl flex flex-col justify-center shadow bg-white">

            {/* بالای کارت: Avatar + ستاره و تجربه */}
            <div className="flex w-[80%] gap-4 mx-auto px-5 items-center justify-center">

                {/* Avatar با Badge (Radar / Status) */}
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    sx={{
                        '& .MuiBadge-dot': {
                            backgroundColor: '#00ff00', // رنگ رادار / آنلاین
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            border: '2px solid white'
                        }
                    }}
                >
                    <Avatar
                        src={profileImg}
                        alt={profileName}
                        sx={{ width: 70, height: 70, bgcolor: getAvatarColor(), fontSize: 24 }}
                    >
                        {!profileImg && profileName ? profileName[0] : null}
                    </Avatar>
                </Badge>

                {/* ستاره‌ها و تجربه */}
                <div className="w-full flex-col items-end" dir="ltr">
                    <StarBox stars={profileStar} />
                    <ExperienceBox experience={profileExperience} />
                </div>
            </div>

            {/* نام و تخصص دکتر */}
            <DoctorName name={profileName} />
            <DoctorExp exp={profileExp} />

            {/* ارتباط و شروع مشاوره */}
            <Communication />
            <StartCounseling onClick={() => navigate("/doctor")} />
        </div>
    );
};

export default DoctorCard;
