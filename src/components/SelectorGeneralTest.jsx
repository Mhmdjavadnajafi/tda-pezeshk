import React from 'react'
import SelectBox from './selectBox';
const GeneralSelectorTest = ()=>{
    return(
        <div className='grid grid-cols-12 gap-1 w-[90%] mx-auto mt-5'>
            <SelectBox title="چکاپ عمومی" col={3}></SelectBox>
            <SelectBox title="سلامت مردان" col={4}></SelectBox>
            <SelectBox title="چکاپ قلب و عروق" col={5}></SelectBox>
            <SelectBox title="سلامت زنان" col={3}></SelectBox>
            <SelectBox title="سلامت کودکان" col={4}></SelectBox>
            <SelectBox title="دیابت" col={2}></SelectBox>
            <SelectBox title="پیشگیری و سلامت" col={5}></SelectBox>
        </div>
    )
}
export default GeneralSelectorTest;