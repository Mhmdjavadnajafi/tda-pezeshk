import { useState } from "react";
import SabtDaroo from "./registrationDaroo";

const ImgMedicine = ({ onAddDrug }) => {
    const [drugCount, setDrugCount] = useState('');
    const [drugDescription, setDrugDescription] = useState('');

    const isValid = drugCount; 

    const handleAdd = () => {
        if (!isValid) return;
        onAddDrug({
            type: 'img_drug',
            count: drugCount,
            description: drugDescription
        });
        setDrugCount('');
        setDrugDescription('');
    };

    return (
        <div>
            <div className="w-[90%] mx-auto flex justify-center items-center gap-2 my-3">
                <div className="h-[106px] flex items-center justify-center bg-gray-200 w-2/5 rounded-2xl text-[14px]">
                    تصویر
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <input
                        type="text"
                        value={drugCount}
                        onChange={(e) => setDrugCount(e.target.value)}
                        className="h-[51px] bg-gray-200 w-full rounded-2xl text-[14px] px-3"
                        placeholder="تعداد دارو"
                    />
                    <input
                        type="text"
                        value={drugDescription}
                        onChange={(e) => setDrugDescription(e.target.value)}
                        className="h-[51px] bg-gray-200 w-full rounded-2xl text-[14px] px-3"
                        placeholder="توضیحات/اختیاری"
                    />
                </div>
            </div>

            <SabtDaroo
                bg={isValid ? 'bg-blue-500' : 'bg-gray-200'}
                text={isValid ? "text-white" : ""}
                onClick={handleAdd}
            />
        </div>
    );
};

export default ImgMedicine;
