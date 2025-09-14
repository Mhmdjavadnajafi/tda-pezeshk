import React, { useState } from 'react';
import CheckboxFalse from '../assets/images/Group 3506.png';
import CheckboxTrue from '../assets/images/Group 3505.png';
import TestSelectQuestion from './question';

const TestSelectItem = ({ title }) => {
    const [statusIcon, setStatusIcon] = useState(true); 

    return (
        <div className="flex items-center justify-between mt-5">
            <div
                onClick={() => setStatusIcon(prev => !prev)}
                className="flex items-center gap-2 cursor-pointer"
            >
                <img src={statusIcon ? CheckboxTrue : CheckboxFalse} />
                <div className={`text-[14px] vazir-medium ${statusIcon ? 'text-black' : 'text-[#9D9D9D]'}`}>
                    {title}
                </div>
            </div>
            <div>
                <TestSelectQuestion />
            </div>
        </div>
    );
};

export default TestSelectItem;
