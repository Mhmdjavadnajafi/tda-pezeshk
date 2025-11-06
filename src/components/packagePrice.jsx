import React from 'react'
import { formatNumber } from '../utils/formatNumber';
const PackagePrice = ({price})=>{
    return(
        <div className="vazir-medium w-[90%] mx-auto text-black text-sm mt-3 text-bold">هزینه ویزیت و ثبت پزشک {formatNumber(price )} تومان</div>
    )
}
export default PackagePrice