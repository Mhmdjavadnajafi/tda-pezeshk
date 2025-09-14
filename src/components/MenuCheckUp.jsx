import React, { useState, useRef, useEffect } from 'react';

const MenuCheckUp = () => {
    const [activeItem, setActiveItem] = useState('checkup');
    const [underlineStyle, setUnderlineStyle] = useState({});
    const itemRefs = useRef({}); 

    const items = [
        { id: 'checkup', title: 'آزمایشات' },
        { id: 'description', title: 'توضیحات' },
    ];

    useEffect(() => {
        const current = itemRefs.current[activeItem];
        if (current) {
            setUnderlineStyle({
                width: current.offsetWidth,
                left: current.offsetLeft,
            });
        }
    }, [activeItem]);

    return (
        <div className="relative px-4 border-b border-gray-300 w-full flex gap-4 py-3">
            {items.map(item => (
                <div
                    key={item.id}
                    ref={el => (itemRefs.current[item.id] = el)}
                    onClick={() => setActiveItem(item.id)}
                    className={`px-4 vazir-medium py-2 cursor-pointer ${activeItem === item.id ? 'text-black' : 'text-gray-400'
                        }`}
                >
                    {item.title}
                </div>
            ))}

            <span
                className="absolute bottom-0 h-1 bg-blue-500 transition-all duration-300 rounded-full"
                style={{ width: underlineStyle.width, left: underlineStyle.left }}
            ></span>
        </div>
    );
};

export default MenuCheckUp;
