import React from "react";

const ToggleSelect = ({ items, active, onChange }) => {
    return (
        <div className="grid grid-cols-12 gap-2 text-center w-[90%] mx-auto mt-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    onClick={() => onChange(item.id)}
                    className={`col-span-5 text-lg cursor-pointer vazir-medium text-[#898989] py-2 rounded-xl ${active === item.id ? "bg-blue-200 text-blue-700" : "bg-gray-200"
                        }`}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
};

export default ToggleSelect;
