import React from "react";
import TriageImg from '../assets/images/Group 3450 (3).png'
import { useNavigate } from "react-router-dom";
const Triage = () => {
    const Navigate = useNavigate('')
    return (
        <div className="h-[172px] col-span-6" onClick={() => Navigate('/triage')}>
            <img className="h-[172px] w-full" src={TriageImg}></img>
        </div>
    )
}
export default Triage;