import React from 'react'
import HeaderContent from "../components/HeaderContent"
import TestHeader from '../components/HeaderTest';
import ClassificationOfTests from '../components/ClassificationofTests';
import TestIMG from '../components/testImgTest';
const Test = ()=>{
    return(
        <div className='w-[100%] mx-auto mt-10'>
            <TestHeader title={'آزمایش'}></TestHeader>
            <HeaderContent></HeaderContent>
            <ClassificationOfTests></ClassificationOfTests>
            <TestIMG></TestIMG>
        </div>
    )
}
export default Test;