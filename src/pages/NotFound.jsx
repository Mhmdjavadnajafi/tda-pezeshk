import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4 vazir-medium">
            <h1 className="text-7xl md:text-9xl font-extrabold mb-4 text-gray-800">404</h1>
            <p className="text-lg md:text-2xl text-gray-700 mb-12">صفحه مورد نظر یافت نشد!</p>
            <div className="relative flex items-center justify-center mb-12 w-full max-w-md">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-32 h-32 text-blue-500 z-20 drop-shadow-lg"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                >
                    <path
                        fill="currentColor"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3 
               19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </motion.svg>
                <svg
                    className="absolute w-full h-24 left-0 top-1/2 -translate-y-1/2"
                    viewBox="0 0 500 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        fill="transparent"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        d="M0,50 L50,50 L70,20 L90,80 L110,50 L150,50 L170,30 L190,70 L210,50 L500,50"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            <motion.button
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition-all font-medium"
            >
                بازگشت به صفحه اصلی
            </motion.button>

        </div>
    );
};

export default NotFoundPage;
