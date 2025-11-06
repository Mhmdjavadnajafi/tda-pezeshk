import { useNavigate } from "react-router-dom"
import Calendar from "../components/Calendar"
import CompleteTitle from "../components/CompleteTitle"
import TestHeader from "../components/HeaderTest"
import HistoryCotainer from "../components/HistoryContainer"

const Doctorconsultationhistory = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <TestHeader title={"سابقه مشاوره پزشک"} onClick={() => navigate('/Medicalrecords')}></TestHeader>
            <CompleteTitle title={"انتخاب تاریخ"}/>
            <Calendar/>
            <HistoryCotainer />
        </div>
    )
}
export default Doctorconsultationhistory