import React from 'react'
import PackageTestTitle from './packageTitleTest'
import PackagePrice from './packagePrice'
import MenuCheckUp from './MenuCheckUp'
import TestSelect from './TestSelect'
import BorderGeneral from './BordergeneralTest'
import TestDetail from './TestDetail'

const CheckUp = ()=>{
    return(
        <div className="w-full mx-auto">
            <PackageTestTitle title={'پکیج چکاب عمومی'}></PackageTestTitle>
            <PackagePrice price={'12000'}></PackagePrice>
            <MenuCheckUp></MenuCheckUp>
            <TestSelect></TestSelect>
            <BorderGeneral></BorderGeneral>
            <TestDetail></TestDetail>
        </div>
    )
}
export default CheckUp