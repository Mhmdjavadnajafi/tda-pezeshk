import { useNavigate } from "react-router-dom";
import Depatment from "./deparment";
import CtScan from "../assets/images/ctscan.png"
import MRI from "../assets/images/mri.png"
import Sono from "../assets/images/sono.png"
import Striptest from '../assets/images/Group 3533 (3).png'
import Graphy from '../assets/images/graphy.png'
import Fizio from '../assets/images/fizio.png'

const ParaClicnicdepartment = () => {
    const navigate = useNavigate()
    return (
        <div className="w-[90%] gap-2 mt-10 mx-auto grid grid-cols-12">
            <Depatment onClick={() => navigate('/UltraSound')} imgSrc={Sono}></Depatment>
            <Depatment onClick={() => navigate('/UltraSound')} imgSrc={CtScan}></Depatment>
            <Depatment onClick={() => navigate('/UltraSound')} imgSrc={MRI}></Depatment>
            <Depatment onClick={() => navigate('/UltraSound')} imgSrc={Graphy}></Depatment>
            <Depatment onClick={() => navigate('/UltraSound')} imgSrc={Fizio}></Depatment>
            <Depatment onClick={() => navigate('/UltraSound')} imgSrc={Striptest}></Depatment>
        </div>
    )
}
export default ParaClicnicdepartment;