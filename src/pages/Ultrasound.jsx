import { useState } from "react"
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
    const [selected, setSelected] = useState([])

    const isButtonActive = selected.length > 0;

    return (
        <LoaderProvider>
            <TestHeader title={"سونو گرافی"} onClick={() => navigate('/paraclinic')} />
            <UltrasoundTextTitle />

            <UltrasoundSelector selected={selected} onChange={setSelected} />

            <BorderGeneral />
            <Anatomy />
            <RequestButton
                onClick={() => {
                    if (isButtonActive) {
                        navigate('/compUltrasound')
                    }
                }}
                text={'ثبت درخواست'}
                bg={isButtonActive ? "bg-blue-500" : "bg-gray-300"}   // رنگ دکمه بر اساس انتخاب
                color={isButtonActive ? "text-white" : "text-gray-500"} // متن دکمه
            />
        </LoaderProvider>
    )
}

export default Ultrasound
