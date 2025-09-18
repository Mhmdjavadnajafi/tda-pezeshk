import BorderGeneral from "./BordergeneralTest"

const CauseDisease = ()=>{
    return (
        <div className="w-[90%] mx-auto">
            <div className="vazir-medium font-bold text-[16px]">توضیحات / علت مراجعه</div>
            <textarea
                className="w-full my-3 vazir-medium p-2 py-3 text-[15px] rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 resize-none"
                rows={6}
                placeholder={`لطفا شرح حال و علائم خود را وارد کنید ...\n \n میتوانید توضیحاتی برای درک بهتر پزشک از بیماری شما، شماره تلفن ضروری برای هماهنگی، پیچیدگی های آدرس محل ارائه خدمات و ... را توضیح دهید`}
            />
            <div className="vazir-medium font-bold text-[15px] text-gray-600">شما میتوانید پس از ثبت سفارش، عکس و فایلهای پزشکی خود را بدون محدودیت از طریق پیام ها ارسال کنید</div>
        </div>
    )
}
export default CauseDisease