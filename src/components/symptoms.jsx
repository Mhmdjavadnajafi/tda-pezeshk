import React from 'react'
import Label from "./labelCard"
import TextBoxAboutMe from './TextBoxAboutMe'
import Biography from './biography'
const Symptoms = ()=>{
    return(
        <div className='mb-20 w-[90%] mx-auto mt-5'>
            <Label labelName={"توضیحات / علت مراجعه"}></Label>
           <Biography/>
        </div>
    )
}
export default Symptoms