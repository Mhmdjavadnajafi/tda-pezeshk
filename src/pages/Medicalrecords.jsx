import { useNavigate } from "react-router-dom"
import ChildTreatmenthistorysections from "../components/childTreatmenthistorysections"
import CompleteTitle from "../components/CompleteTitle"
import TestHeader from "../components/HeaderTest"
import SearchBoxSavabeghContainer from "../components/SearchBoxSavabeghContainer"
import TreatmenthistoryMessage from "../components/TreatmenthistoryMessage"
import Treatmenthistorysections from "../components/Treatmenthistorysections"
import Navbar from "../layouts/Navbar"

const MedicalRecords = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <TestHeader title={'پرونده پزشکی'} onClick={()=>navigate('/content')}></TestHeader>
            <SearchBoxSavabeghContainer/>
            <CompleteTitle title={"سابقه درمانی اشکان حسنوندی"} />
            <Treatmenthistorysections/>
            <TreatmenthistoryMessage/>
            <CompleteTitle title={"سابقه درمانی امیر علی حسنوندی"} />
            <ChildTreatmenthistorysections/>
            <Navbar/>
        </div>
    )
}
export default MedicalRecords