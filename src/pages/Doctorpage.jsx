import { BsTelephone } from "react-icons/bs"
import CmBox from "../components/cmBox"
import DrDetail from "../components/DrDetail"
import DrInformationDoctorPage from "../components/DrNameDoctorPage"
import TestHeader from "../components/HeaderTest"
import { CiVideoOn } from "react-icons/ci"
import { FiTrello } from "react-icons/fi"
import BorderGeneral from "../components/BordergeneralTest"
import MenuDrPage from "../components/MenuDrPage"
import AboutMeDr from "../components/AboutMeDr"
import Typeofconsultation from "../components/Typeofconsultation"
import Comments from "../components/CommentsForDoctor"
import RequestButton from '../components/RequestButton'
import LoaderProvider from "./LoaderProvider"
import { useNavigate, useLocation } from "react-router-dom"

const DoctorPage = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleBack = () => {
        if (location.state?.fromDoctors) {
            navigate(-1); 
        } else {
            navigate(-1); 
        }
    }

    return (
        <LoaderProvider>
            <div>
                <TestHeader title={"مشاوره پزشک"} onClick={handleBack} />
                <DrDetail />
                <DrInformationDoctorPage name={'دکتر مینا بیرانوند'} exp={"دکترای تخصصی روانشناسی و مشاوره"} />
                <div className="w-[90%] mx-auto flex items-center justify-between gap-x-1">
                    <CmBox icon={<BsTelephone />} text={"اورژانسی"} />
                    <CmBox icon={<BsTelephone />} text={"تلفنی"} />
                    <CmBox icon={<BsTelephone />} text={"متنی"} />
                    <CmBox icon={<CiVideoOn />} text={"تصویری"} />
                    <CmBox icon={<FiTrello />} text={"حضوری"} />
                </div>
                <BorderGeneral />
                <MenuDrPage />
                <AboutMeDr />
                <BorderGeneral />
                <Typeofconsultation />
                <BorderGeneral />
                <Comments />
                <RequestButton
                    bg={'bg-blue-500'}
                    color={"text-white"}
                    onClick={() => navigate('/doctorPayment')}
                    text={'تکمیل سفارش'}
                />
            </div>
        </LoaderProvider>
    )
}

export default DoctorPage
