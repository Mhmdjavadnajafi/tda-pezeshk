import React from 'react'
import TestHeader from "../components/HeaderTest"
import GeneralTestTitle from '../components/GeneralTestTitle'
import GeneralSelectorTest from '../components/SelectorGeneralTest'
const GeneralTest = ()=>{
    return(
        <div className='w-[100%] mx-auto mt-10'>
            <TestHeader title={'آزمایش عمومی وچکاپ'}></TestHeader>
            <GeneralTestTitle></GeneralTestTitle>
            <GeneralSelectorTest></GeneralSelectorTest>
        </div>
    )
}
export default GeneralTest