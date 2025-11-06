import React from 'react'
import PackageTestTitle from './packageTitleTest'
import PackagePrice from './packagePrice'
import MenuCheckUp from './MenuCheckUp'
import TestSelect from './TestSelect'
import BorderGeneral from './BordergeneralTest'
import TestDetail from './TestDetail'
import { formatNumber } from '../utils/formatNumber';
const CheckUp = () => (
    <div className="w-full mx-auto">
        <PackageTestTitle title={'پکیج چکاب عمومی'} />
        <PackagePrice price={'12000'} />
        <MenuCheckUp />
        <div id="checkup">
            <TestSelect />
            <BorderGeneral />
        </div>
        <TestDetail />
    </div>
)

export default CheckUp
