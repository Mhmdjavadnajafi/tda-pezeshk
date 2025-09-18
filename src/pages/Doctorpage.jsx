import { BsTelephone } from "react-icons/bs"
import CmBox from "../components/cmBox"
import DoctorName from "../components/DoctorName"
import DrDetail from "../components/DrDetail"
import DrInformationDoctorPage from "../components/DrNameDoctorPage"
import TestHeader from "../components/HeaderTest"
import { CiVideoOff, CiVideoOn } from "react-icons/ci"
import { FiTrello } from "react-icons/fi"
import BorderGeneral from "../components/BordergeneralTest"
import MenuDrPage from "../components/MenuDrPage"
import AboutMeDr from "../components/AboutMeDr"
import Typeofconsultation from "../components/Typeofconsultation"
import Comments from "../components/CommentsForDoctor"
import RequestButton from '../components/RequestButton'
import LoaderProvider from "./LoaderProvider"
import { useNavigate } from "react-router-dom"
const DoctorPage = () => {
    const navigate = useNavigate('')
    return (
        <LoaderProvider>
            <div>
                <TestHeader title={"مشاوره پزشک"} onClick={() => navigate('/doctors')}></TestHeader>
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
                <Comments></Comments>
                <RequestButton onClick={() => navigate('/doctorPayment')} text={'تکمیل سفارش'}></RequestButton>
            </div>
        </LoaderProvider>
    )
}
export default DoctorPage