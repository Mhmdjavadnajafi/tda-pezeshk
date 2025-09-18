import DrImg from '../assets/images/dr.png';
import { IoStar, IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const DoctorPaymentProfile = ({ name, expertise, profile, star, counseling }) => {
    return (
        <div className="w-[90%] mx-auto rounded-lg py-5 px-3" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
            <div className="flex justify-between items-center border-b border-gray-100 pb-5">
                <div className='flex items-center gap-3'>
                    <div className='relative'>
                        <img className='w-20 h-20 rounded-full' src={profile || DrImg} alt="doctor" />
                        <motion.div
                            className='absolute right-0 top-14'
                            initial={{ scale: 0.8, opacity: 0.6 }}
                            animate={{ scale: [0.8, 1, 0.8], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <IoCallSharp className='text-green-500 text-3xl rotate-270' />
                        </motion.div>
                    </div>

                    <div>
                        <div className='vazir-medium text-lg'>{name}</div>
                        <div className='mt-2 vazir-medium text-gray-500'>{expertise}</div>
                    </div>
                </div>
                <div>
                    <div className='w-20 rounded h-6 bg-gray-100 flex justify-center items-center text-yellow-400'>
                        <IoStar /> {star}
                    </div>
                    <div className='w-20 text-black font-bold rounded h-10 bg-gray-100 mt-2 flex flex-col items-center justify-center'>
                        +{counseling}
                        <div className='text-[12px] vazir-medium text-gray-500'>مشاوره موفق</div>
                    </div>
                </div>
            </div>
            <div className='vazir-medium text-gray-500 mt-3 leading-6'>سلام شما <span className='text-green-500'>مشاوره تلفنی فوری</span> را انتخاب کردید؛پس از ثبت و علت مراجعه و پرداخت،بلافاصله با شما تماس خواهم گرفت. پس از تماس،امکان چت متنی با من فراهم است.</div>
        </div>
    )
}

export default DoctorPaymentProfile;
