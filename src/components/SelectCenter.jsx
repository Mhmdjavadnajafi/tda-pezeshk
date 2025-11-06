import Choice from "./Choice"
import CompleteTitle from "./CompleteTitle"
import { useState, useEffect } from "react"

const SelectCenter = ({ onSelect, disabled = false }) => {
    const [activeCenter, setActiveCenter] = useState('')
    const data = [
        { id: 'Khorshidcenter', title: `مرکز تصویر برداری خورشید`, des1: `خسابان شریعتی کوچه شهید موسوی پلاک 18`, des2: 'هزینه تصویر برداری 2.850.000 تومان ', des3: 'رزرو نزدیکترین زمان آزاد مرکز' },
        { id: 'mihancenter', title: `مرکز تصویر برداری میهن`, des1: `خسابان شریعتی کوچه شهید موسوی پلاک 18`, des2: 'هزینه تصویر برداری 2.850.000 تومان ', des3: 'رزرو نزدیکترین زمان آزاد مرکز' },
    ]

    const handleSelect = (id) => {
        if (disabled) return 
        setActiveCenter(id)
        if (onSelect) onSelect(id)
    }
    useEffect(() => {
        if (disabled) {
            setActiveCenter('')
            if (onSelect) onSelect(null)
        }
    }, [disabled, onSelect])

    return (
        <div className={`pb-10 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
            <CompleteTitle title={"انتخاب مرکز"} />
            <Choice Data={data} onSelect={handleSelect} active={activeCenter} disabled={disabled} />
        </div>
    )
}

export default SelectCenter
