import { useContext, useState } from "react";
import { TimerContext } from "./TimerContext";
import GetPhone from "../utils/GetPhone";
import OtpService from "../services/otpService";
import { motion } from "framer-motion";

const Timer = () => {
    const { timer, canResend, resetTimer, stopTimer } = useContext(TimerContext);
    const [isSending, setIsSending] = useState(false);

    const handleResend = async () => {
        setIsSending(true);
        try {
            const number = await GetPhone();
            await OtpService({ phoneNumber: number });
            resetTimer();
        } catch (err) {
            console.error("Error resending OTP:", err);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="flex flex-col items-start">
            {!canResend && (
                <div
                    className="text-left vazir-medium font-bold"
                    style={{ color: stopTimer ? "#34D399" : "#909090" }}
                >
                    {timer}s تا ارسال مجدد کد
                </div>
            )}

            {canResend && !stopTimer && (
                <motion.button
                    onClick={handleResend}
                    disabled={isSending}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-2 px-5 py-2 rounded-lg vazir-medium text-sm font-medium transition-all duration-300 shadow-md 
            ${isSending ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}
          `}
                >
                    {isSending ? "در حال ارسال..." : "ارسال دوباره کد"}
                </motion.button>
            )}
        </div>
    );
};

export default Timer;
