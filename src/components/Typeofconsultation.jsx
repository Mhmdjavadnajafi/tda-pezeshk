import React from "react";
import TypeofconsultationBoxActive from "./TypeofconsultationBoxActive";
import TypeofconsultationBoxDisable from "./TypeofconsultationBoxDisable";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { RiRedPacketLine } from "react-icons/ri";
import { FiTrello } from "react-icons/fi";

const Typeofconsultation = () => {
    return (
        <div id="typeconsultation" className="w-[90%] mx-auto pb-5">
            <div className="vazir-medium text-lg font-bold">نوع مشاوره</div>
            <div className="w-full mt-3">
                <TypeofconsultationBoxActive
                    icon={<IoCallOutline />}
                    name={"اورژانسی"}
                    description={"تماس آنی، چت و دریافت نسخه"}
                    visitPrice={"40.000"}
                />
                <TypeofconsultationBoxActive
                    icon={<IoCallOutline />}
                    name={"اورژانسی"}
                    description={"تماس آنی، چت و دریافت نسخه"}
                    visitPrice={"40.000"}
                />
                <TypeofconsultationBoxDisable
                    icon={<RiRedPacketLine />}
                    name={"متنی"}
                    description={"تماس آنی، چت و دریافت نسخه"}
                    visitPrice={"40.000"}
                />
                <TypeofconsultationBoxDisable
                    icon={<IoVideocamOutline />}
                    name={"تصویری"}
                    description={"تماس آنی، چت و دریافت نسخه"}
                    visitPrice={"40.000"}
                />
                <TypeofconsultationBoxDisable
                    icon={<FiTrello />}
                    name={"حضوری"}
                    description={"تماس آنی، چت و دریافت نسخه"}
                    visitPrice={"40.000"}
                />
            </div>
        </div>
    );
};

export default Typeofconsultation;
