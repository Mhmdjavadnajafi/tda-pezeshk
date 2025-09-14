import ConsultantsfilterHeader from "../components/ConsultantsfilterHeader"
import DoctorsContainer from "../components/DoctorsContainer"
import ExpertisesMedicalContainer from "../components/expertisesMedical"
import TestHeader from "../components/HeaderTest"
import SearchBox from "../components/SearchBox"
import SearchBoxMedical from "../components/SearchBoxMedical"

const Medicalspecialties = () => {
    return (
        <div className="w-full h-full mx-auto relative">
            <TestHeader title={"تخصص ها"}></TestHeader>
            <SearchBoxMedical/>
            <ExpertisesMedicalContainer/>
            <DoctorsContainer/>
        </div>
    )
}
export default Medicalspecialties