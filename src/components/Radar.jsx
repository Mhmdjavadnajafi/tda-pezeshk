import React from "react";

export default function RadarCircle() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="absolute top-0 right-5 w-[8px] h-[8px] rounded-full bg-green-400"
                    style={{ animation: `radar 2.4s ease-out ${i * 0.6}s infinite` }}
                />
            ))}
            <div className="w-[10px] h-[10px] rounded-full bg-green-600 right-5 absolute top-0"></div>

            <style>{`
        @keyframes radar {
          0%   { transform: scale(1); opacity: .6; }
          70%  { opacity: .15; }
          100% { transform: scale(5); opacity: 0; }
        }
      `}</style>
        </div>
    );
}
