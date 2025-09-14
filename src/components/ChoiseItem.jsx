import Choice from "./Choice"
import CompleteTitle from "./CompleteTitle"
import TestHeader from "./HeaderTest"
import React from 'react'

const ChoiceItem = ()=>{
    return(
        <div>
            <CompleteTitle title={"انتخاب مورد"} />
            <Choice/>
        </div>
    )
}
export default ChoiceItem