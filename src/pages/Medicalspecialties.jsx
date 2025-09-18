import { useNavigate } from "react-router-dom"
import ConsultantsfilterHeader from "../components/ConsultantsfilterHeader"
import DoctorsContainer from "../components/DoctorsContainer"
import ExpertisesMedicalContainer from "../components/expertisesMedical"
import TestHeader from "../components/HeaderTest"
import SearchBox from "../components/SearchBox"
import SearchBoxMedical from "../components/SearchBoxMedical"
import LoaderProvider from "./LoaderProvider"

const Medicalspecialties = () => {
    const navigate = useNavigate()
    return (
        <LoaderProvider>
            <div className="w-full h-full mx-auto relative">
                <TestHeader title={"تخصص ها"} onClick={()=>navigate('/content')}></TestHeader>
                <SearchBoxMedical />
                <ExpertisesMedicalContainer />
                <DoctorsContainer />
            </div>
        </LoaderProvider>
    )
}
export default Medicalspecialties