import { useState } from "react"
import CompleteTitle from "../components/CompleteTitle"
import TestHeader from "../components/HeaderTest"
import LoaderProvider from "./LoaderProvider"
import UltrasoundSelector from "../components/UltrasoundSelector"
import BorderGeneral from "../components/BordergeneralTest"
import Anatomy from "../components/anatomy"
import RequestButton from "../components/RequestButton"
import { useNavigate } from "react-router-dom"
import UltrasoundTextTitle from "../components/UltrasoundTextTitle"
const AmbulancePage = ()=>{
    const navigate = useNavigate()
     const [selected, setSelected] = useState([])   
     const isButtonActive = selected.length > 0;
    return(
        <LoaderProvider>
            <TestHeader title={"حمل و نقل"} onClick={()=>navigate('/')}></TestHeader>
            <UltrasoundTextTitle />
            <UltrasoundSelector selected={selected} onChange={setSelected} />
            <BorderGeneral/>
            <Anatomy/>
            <RequestButton
                onClick={() => {
                    if (isButtonActive) {
                        navigate('/ComplateAmbulance')
                    }
                }}
                text={'ثبت درخواست'}
                bg={isButtonActive ? "bg-blue-500" : "bg-gray-300"}   
                color={isButtonActive ? "text-white" : "text-gray-500"} 
            />
        </LoaderProvider>
    )
}
export default AmbulancePage