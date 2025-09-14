import CompleteTitle from "./CompleteTitle"
import React from 'react'
import MAP from "./Map"

const LocationUser = () => {
    return (
        <div className="mb-30 w-full h-[402px]">
            <CompleteTitle title={"انتخاب موقعیت شما"} />
            <MAP/>
        </div>
    )
}
export default LocationUser