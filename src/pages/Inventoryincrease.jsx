import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestHeader from "../components/HeaderTest";
import Label from "../components/labelCard";
import Suggestedamount from "../components/Suggestedamount";
import LoaderProvider from "./LoaderProvider";
import Transfertotheportal from "../components/Transfertotheportal";

const Inventoryincrease = () => {
    const [rawValue, setRawValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const onlyDigits = e.target.value.replace(/,/g, "").replace(/\D/g, "");
        setRawValue(onlyDigits);
    };

    const increaseValue = (val) => {
        setRawValue((prev) => {
            const current = Number(prev) || 0;
            return String(current + val);
        });
    };

    const formattedValue = rawValue ? Number(rawValue).toLocaleString("fa-IR") : "";

    return (
        <LoaderProvider>
            <div className="w-full mx-auto relative">
                <TestHeader title="افزایش موجودی" onClick={() => navigate("/profile")} />
                <div className="w-[90%] mx-auto mt-8">
                    <Label labelName="ورود مبلغ" />
                    <div className="relative w-full mt-2">
                        <input
                            type="text"
                            inputMode="numeric"
                            placeholder="2,400"
                            value={formattedValue}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-right text-gray-800 vazir-medium focus:outline-none"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 vazir-medium">
                            تومان
                        </span>
                    </div>
                    <div className="flex mt-5 gap-3 mb-8">
                        <Suggestedamount onClick={() => increaseValue(50000)} value="50.000 تومان" />
                        <Suggestedamount onClick={() => increaseValue(100000)} value="100.000 تومان" />
                        <Suggestedamount onClick={() => increaseValue(300000)} value="300.000 تومان" />
                    </div>
                    <Transfertotheportal text="انتقال به درگاه" />
                </div>
            </div>
        </LoaderProvider>
    );
};

export default Inventoryincrease;
