import React from "react";
import SelectBox from "./selectBox";

const options = [
    { key: "right-wrist", title: "مچ دست راست" },
    { key: "left-wrist", title: "مچ دست چپ" },
    { key: "right-leg", title: "پای راست" },
    { key: "left-leg", title: "پای چپ" },
    { key: "head", title: "سر" },
    { key: "back", title: "کمر" },
    { key: "shoulder", title: "شانه" },
    { key: "neck", title: "گردن" },
];

const UltrasoundSelector = ({ selected = [], onChange }) => {
    const toggleSelect = (key) => {
        onChange(selected.includes(key) ? selected.filter((i) => i !== key) : [...selected, key]);
    };

    return (
        <div className="w-[90%] mx-auto mt-5 flex flex-wrap gap-2 items-center">
            {options.map((opt) => (
                <div key={opt.key} onClick={() => toggleSelect(opt.key)} className="cursor-pointer">
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
    )
}


export default UltrasoundSelector;
