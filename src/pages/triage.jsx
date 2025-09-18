import { useNavigate } from "react-router-dom"
import TestHeader from "../components/HeaderTest"
import LoaderProvider from "./LoaderProvider"
import BorderGeneral from "../components/BordergeneralTest"
import Anatomy from "../components/anatomy"
import RequestButton from "../components/RequestButton"
import UltrasoundTextTitle from "../components/UltrasoundTextTitle"
import Persons from "../components/Person"
import CompleteTitle from "../components/CompleteTitle"
import UltrasoundSelector from "../components/UltrasoundSelector"
import LocationofPain from "../components/locationofpain"

const TriagePage=()=>{
    const navigate = useNavigate('')
    return(
        <LoaderProvider>
            <TestHeader title={"تریاژ"} onClick={() => navigate('/content')}></TestHeader>
            <CompleteTitle title={'موقعیت بدن'} />
            <LocationofPain/>
            <UltrasoundTextTitle />
            <UltrasoundSelector />
            <BorderGeneral></BorderGeneral>
            <Anatomy />
            
            <RequestButton onClick={() => navigate('/CompTriage')} text={'ثبت درخواست'} />
        </LoaderProvider>
    )
}
export default TriagePage