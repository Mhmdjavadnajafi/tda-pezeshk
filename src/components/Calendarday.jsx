import { motion } from "framer-motion";

const Calendarday = ({ dayName, date, bgColor, textColor, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            className={`vazir-medium h-[55px] w-1/4 ${textColor} rounded-xl flex p-2 flex-col justify-center gap-1 items-center ${bgColor}`}
            whileTap={{ scale: 0.9 }} 
            animate={{ scale: bgColor ? 1.05 : 1, y: bgColor ? -5 : 0 }} 
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <div>{dayName}</div>
            <div className="text-xs">{date}</div>
        </motion.div>
    );
};

export default Calendarday;
