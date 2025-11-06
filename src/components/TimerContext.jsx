// TimerContext.js
import { createContext, useState, useEffect } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState(() => {
        const saved = localStorage.getItem("timerValue");
        return saved ? Number(saved) : 120;
    });
    const [canResend, setCanResend] = useState(false);
    const [stopTimer, setStopTimer] = useState(false);

    useEffect(() => {
        if (timer <= 0 || stopTimer) {
            setCanResend(!stopTimer);
            return;
        }
        const interval = setInterval(() => {
            setTimer(prev => {
                localStorage.setItem("timerValue", prev - 1);
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, stopTimer]);

    const resetTimer = () => {
        setTimer(120);
        localStorage.setItem("timerValue", 120);
        setCanResend(false);
        setStopTimer(false);
    };

    const startTimer = () => {
        setStopTimer(false);
    };

    return (
        <TimerContext.Provider
            value={{
                timer,
                canResend,
                resetTimer,
                stopTimer,
                setStopTimer,
                startTimer, 
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
