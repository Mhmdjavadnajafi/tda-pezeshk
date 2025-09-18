import { useNavigate } from "react-router-dom"
import Filters from "../components/filters"
import TestHeader from "../components/HeaderTest"
import Medicinedepartment from "../components/Medicinedepartment"
import Pharmacymessage from "../components/Pharmacymessage"
import SearchBoxMedical from "../components/SearchBoxMedical"
import LoaderProvider from "./LoaderProvider"
const Pharmacy = ()=>{
    const navigate = useNavigate()
    return (
        <LoaderProvider>
            <TestHeader title={"داروخانه"} onClick={()=>navigate('/content')}></TestHeader>
            <SearchBoxMedical/>
            <Medicinedepartment/>
            <Pharmacymessage/>
        </LoaderProvider>
    )
}
export default Pharmacy