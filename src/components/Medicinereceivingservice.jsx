import { useState } from "react";
import ToggleSelect from "./ToggleSelect";

const Medicinereceivingservice = () => {
    const [active, setActive] = useState("Electronic_version");
    const[text,setText] = useState('')
    const personsList = [
        { id: "Electronic_version", text: "نسخه الکترونیک" },
        { id: "Paper_version", text: "نسخه کاغذی" },
    ];

    return (
        <div>
            <ToggleSelect
                items={personsList}
                active={active}
                onChange={setActive}
            />

            {active === "Electronic_version" && (
                <div className="w-[90%] mx-auto my-8">
                    <div className="flex items-center justify-between gap-4 text-center vazir-medium">
                        <div>
                            <input
                                id="file-upload"
                                type="file"
                                accept=".jpg,.png,.pdf"
                                className="hidden"
                            />
                            <label
                                htmlFor="file-upload"
                                className="border rounded-xl h-[98px] w-[126px] text-[16px] flex justify-center items-center cursor-pointer border-gray-400 text-gray-500 px-2"
                            >
                                بارگذاری تصویر دارو
                            </label>
                        </div>

                        <div className="text-[14px] text-right text-gray-500">
                            بعد از آماده سازی هزینه دارو اعلام و لینک پرداخت برای شما ارسال میگردد.
                            با پرداخت موفق هزینه خرید در لوکیشن اعلامی، داروها را تحویل خواهید گرفت
                        </div>
                    </div>
                </div>
            )}

            {active === "Paper_version" && (
                <div className="w-[90%] mx-auto my-8">
                    <div className="flex items-center justify-between gap-4 text-center vazir-medium">
                        <div>
                            <input placeholder={`کد ثبت دارو را وارد نمایید`} className="border rounded-xl h-[98px] w-[126px] text-[16px] flex justify-center items-center cursor-pointer border-gray-400 text-gray-500 px-2"></input>
                        </div>

                        <div className="text-[14px] text-right text-gray-500">
                            بعد از آماده سازی هزینه دارو اعلام و لینک پرداخت برای شما ارسال میگردد.
                            با پرداخت موفق هزینه خرید در لوکیشن اعلامی، داروها را تحویل خواهید گرفت
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Medicinereceivingservice;
