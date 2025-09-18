import { useNavigate } from "react-router-dom"
import DrCard from "./DrCard"

const DoctorsContainer = ()=>{
    const navigate  = useNavigate('')
    return(
        <div className="py-8 w-full bg-gray-100 flex flex-col gap-6">
            <DrCard onClick={() => navigate('/doctor')}></DrCard>
            <DrCard onClick={() => navigate('/doctor')}></DrCard>
            <DrCard onClick={() => navigate('/doctor')}></DrCard>
            <DrCard onClick={() => navigate('/doctor')}></DrCard>
            <DrCard onClick={() => navigate('/doctor')}></DrCard>
        </div>
    )
}
export default DoctorsContainer