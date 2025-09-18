import { useNavigate } from "react-router-dom"
import TestHeader from "../components/HeaderTest"
import LoaderProvider from "./LoaderProvider"

const Rulesandregulations = () => {
    const navigate = useNavigate('')
    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader title={"قوانین و مقررات"} onClick={() => navigate('/profile')}></TestHeader>
            </div>
        </LoaderProvider>
    )
}
export default Rulesandregulations