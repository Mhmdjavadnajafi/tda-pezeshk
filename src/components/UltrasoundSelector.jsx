import React, { useState } from "react";
import SelectBox from "./selectBox";

const options = [
    { key: "right-wrist", title: "مچ دست راست" },
    { key: "left-wrist", title: "مچ دست چپ" },
    { key: "right-leg", title: "راق پای راست" },
    { key: "left-leg", title: "پای چپ" },
    { key: "head", title: "سر" },
    { key: "back", title: "کمر" },
    { key: "shoulder", title: "شانه" },
    { key: "neck", title: "گردن" },
];

const GeneralSelectorTest = () => {
    const [selected, setSelected] = useState([]);

    const toggleSelect = (key) => {
        setSelected((prev) =>
            prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
        );
    };

    return (
        <div>
            <div className="w-[90%] mx-auto mt-5 flex flex-wrap gap-2 items-center">
                {options.map((opt) => (
                    <div
                        key={opt.key}
                        onClick={() => toggleSelect(opt.key)}
                        className="cursor-pointer"
                    >
                        <SelectBox
                            className={`${selected.includes(opt.key)
                                    ? "bg-blue-200 text-blue-700"
                                    : "bg-gray-200 text-[#8F8F8F]"
                                } mt-1 text-bold vazir-medium px-[10px] py-2 rounded-lg`}
                            title={opt.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GeneralSelectorTest;
