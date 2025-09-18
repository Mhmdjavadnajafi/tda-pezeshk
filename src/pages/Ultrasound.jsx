import { useNavigate } from "react-router-dom"
import TestHeader from "../components/HeaderTest"
import LoaderProvider from "./LoaderProvider"
import UltrasoundTextTitle from "../components/UltrasoundTextTitle"
import UltrasoundSelector from "../components/UltrasoundSelector"
import BorderGeneral from "../components/BordergeneralTest"
import Anatomy from "../components/anatomy"
import RequestButton from "../components/RequestButton"
const Ultrasound = () => {
    const navigate = useNavigate()
    return (
        <LoaderProvider>
            <TestHeader title={"سونو گرافی"} onClick={() => navigate('/paraclinic')}></TestHeader>
            <UltrasoundTextTitle/>
            <UltrasoundSelector />
            <BorderGeneral></BorderGeneral>
            <Anatomy/>
            <RequestButton onClick={() => navigate('/compUltrasound')} text={'ثبت درخواست'} />
        </LoaderProvider>
    )
}
export default Ultrasound