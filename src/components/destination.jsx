import React, { useState } from "react";
import { iranCities } from "../utils/iranCities.js";
import Label from "./labelCard.jsx";
import { FiChevronDown } from "react-icons/fi";

const DestinationModal = ({
    selectedProvince,
    setSelectedProvince,
    selectedCity,
    setSelectedCity
}) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <div className="p-4 max-w-md mx-auto vazir-medium">
            <Label labelName={"مقصد حرکت بیمار"} />
            <div className="mb-6 flex gap-5 mt-4">
                <div className="flex-1">
                    <button
                        onClick={() =>
                            setOpenDropdown(openDropdown === "province" ? null : "province")
                        }
                        className={`w-full p-3 rounded-lg border text-right transition shadow-sm flex justify-between items-center
              ${openDropdown === "province"
                                ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50"
                                : "hover:border-blue-400 border-gray-600 focus:ring-2 focus:ring-blue-300"
                            }`}
                    >
                        <span>{selectedProvince?.province || "استان"}</span>
                        <FiChevronDown className="text-gray-500" />
                    </button>
                </div>
                <div className="flex-1">
                    <button
                        onClick={() =>
                            selectedProvince &&
                            setOpenDropdown(openDropdown === "city" ? null : "city")
                        }
                        disabled={!selectedProvince}
                        className={`w-full p-3 rounded-lg border text-right transition shadow-sm flex justify-between items-center disabled:opacity-50
              ${openDropdown === "city"
                                ? "border-blue-500 ring-2 ring-blue-200 bg-blue-50"
                                : "hover:border-blue-400 border-gray-600 focus:ring-2 focus:ring-blue-300"
                            }`}
                    >
                        <span>{selectedCity || "شهر"}</span>
                        <FiChevronDown className="text-gray-500" />
                    </button>
                </div>
            </div>

            {openDropdown && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpenDropdown(null)}
                    ></div>
                    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-3 animate-[fadeIn_0.25s_ease-out] overflow-hidden">
                        <div className="flex justify-between items-center border-b px-5 py-4 bg-gray-50">
                            <h2 className="font-semibold text-gray-700 text-lg">
                                {openDropdown === "province" ? "انتخاب استان" : "انتخاب شهر"}
                            </h2>
                            <button
                                onClick={() => setOpenDropdown(null)}
                                className="text-gray-500 hover:text-red-500 transition text-xl"
                            >
                                ✖
                            </button>
                        </div>
                        <ul className="max-h-[60vh] overflow-auto p-3 space-y-2">
                            {openDropdown === "province"
                                ? iranCities.map((prov) => (
                                    <li
                                        key={prov.province}
                                        className={`p-3 rounded-lg cursor-pointer transition flex justify-between items-center
                        ${selectedProvince?.province === prov.province
                                                ? "bg-blue-50 border border-blue-400 text-blue-600"
                                                : "hover:bg-blue-50 border border-transparent"
                                            }`}
                                        onClick={() => {
                                            setSelectedProvince(prov);
                                            setSelectedCity(null);
                                            setOpenDropdown(null);
                                        }}
                                    >
                                        {prov.province}
                                        {selectedProvince?.province === prov.province && (
                                            <span className="text-blue-500">✔</span>
                                        )}
                                    </li>
                                ))
                                : selectedProvince?.cities.map((city) => (
                                    <li
                                        key={city}
                                        className={`p-3 rounded-lg cursor-pointer transition flex justify-between items-center
                        ${selectedCity === city
                                                ? "bg-blue-50 border border-blue-400 text-blue-600"
                                                : "hover:bg-blue-50 border border-transparent"
                                            }`}
                                        onClick={() => {
                                            setSelectedCity(city);
                                            setOpenDropdown(null);
                                        }}
                                    >
                                        {city}
                                        {selectedCity === city && (
                                            <span className="text-blue-500">✔</span>
                                        )}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DestinationModal;
