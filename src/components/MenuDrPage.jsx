import React, { useState, useRef, useEffect } from 'react';

const MenuDrPage = () => {
    const [activeItem, setActiveItem] = useState('aboutme');
    const [underlineStyle, setUnderlineStyle] = useState({});
    const itemRefs = useRef({});

    const items = [
        { id: 'aboutme', title: 'درباره من' },
        { id: 'typeconsultation', title: 'نوع مشاوره' },
        { id: 'comment', title: 'نظرات کاربران' },
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

    const handleClick = (id) => {
        setActiveItem(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="relative px-2 border-b border-gray-300 w-full flex gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    ref={(el) => (itemRefs.current[item.id] = el)}
                    onClick={() => handleClick(item.id)}
                    className={`px-4 vazir-medium py-2 cursor-pointer ${activeItem === item.id ? 'text-blue-500' : 'text-gray-400'
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

export default MenuDrPage;
