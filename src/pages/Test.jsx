import React from 'react'
import HeaderContent from "../components/HeaderContent"
import TestHeader from '../components/HeaderTest';
import ClassificationOfTests from '../components/ClassificationofTests';
import TestIMG from '../components/testImgTest';
import { useNavigate } from "react-router-dom";

const Test = ()=>{
    const navigate = useNavigate()
    return(
        <div className='w-[100%] mx-auto'>
            <TestHeader onClick={() => navigate('/content')} title={'آزمایش'}></TestHeader>
            <HeaderContent></HeaderContent>
            <ClassificationOfTests></ClassificationOfTests>
            <TestIMG></TestIMG>
        </div>
    )
}
export default Test;