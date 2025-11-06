import React from 'react';
import Label from "./labelCard";
import Biography from './biography';

const Symptoms = ({ bio, setBio, isError }) => {
    return (
        <div className='w-[90%] mx-auto mt-5'>
            <Label labelName={"توضیحات / علت مراجعه"} />
            <Biography value={bio} onChange={setBio} />
        </div>
    )
}

export default Symptoms;
