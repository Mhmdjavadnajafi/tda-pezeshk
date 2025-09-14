import React, { useEffect, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaLocationCrosshairs } from "react-icons/fa6";
import L from "leaflet";

import person from "../assets/images/person.jpeg";
import home from "../assets/images/location.png";

// آیکون کاربر
const userIcon = new L.Icon({
    iconUrl: person,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
});

// آیکون فروشگاه ثابت وسط نقشه
const ShopIcon = new L.Icon({
    iconUrl: home,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

// ---- کامپوننت لوکیشن کاربر ----
const MyLocation = ({ setData }) => {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
        // شروع ردیابی موقعیت
        map.locate({ setView: true, maxZoom: 16 });

        const onLocationFound = (e) => {
            setPosition(e.latlng);
            if (typeof setData === "function") {
                setData(e.latlng);
            }
        };

        map.on("locationfound", onLocationFound);

        return () => {
            map.off("locationfound", onLocationFound);
        };
    }, [map, setData]);

    const showMyLocation = () => {
        map.locate({ setView: true, maxZoom: 16 });
    };

    return (
        <>
            {position && <Marker icon={userIcon} position={position} />}
            <span
                className="absolute bottom-5 right-4 bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow"
                onClick={showMyLocation}
            >
                <FaLocationCrosshairs className="text-xl" />
            </span>
        </>
    );
};


// ---- کامپوننت اصلی نقشه ----
const MAP = ({ data, setData }) => {
    const mapRef = useRef();

    useEffect(() => {
        if (!mapRef.current) return;

        const map = mapRef.current;

        const handleMoveEnd = () => {
            const center = map.getCenter();

            // ✅ فقط وقتی setData وجود داشته باشه
            if (typeof setData === "function") {
                setData({ lat: center.lat, lng: center.lng });
            }
        };

        map.on("moveend", handleMoveEnd);

        return () => {
            map.off("moveend", handleMoveEnd);
        };
    }, [setData]);

    return (
        <div className="w-full h-full mt-3 z-0 rounded-xl overflow-hidden relative">
            <MapContainer
                center={[33.4878, 48.3558]} // مختصات پیش‌فرض
                zoom={13}
                style={{ height: "100%", width: "100%", zIndex: 10 }}
                whenCreated={(mapInstance) => {
                    mapRef.current = mapInstance;
                }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />

                {/* دکمه و مارکر لوکیشن کاربر */}
                <MyLocation setData={setData} />
            </MapContainer>

            {/* مارکر ثابت وسط نقشه */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-[9999] pointer-events-none">
                <img src={home} alt="marker" className="w-8 h-fit object-fit" />
            </div>
        </div>
    );
};

export default MAP; 