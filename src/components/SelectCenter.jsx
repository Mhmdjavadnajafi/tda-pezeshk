import Choice from "./Choice"
import CompleteTitle from "./CompleteTitle"

const SelectCenter = ()=>{
    const data = [
        { id: 'Khorshidcenter', title: `مرکز تصویر برداری خورشید`, des1: `خسابان شریعتی کوچه شهید موسوی پلاک 18`, des2: 'هزینه تصویر برداری 2.850.000 تومان ', des3:'رزرو نزدیکترین زمان آزاد مرکز' },
        { id: 'mihancenter', title: `مرکز تصویر برداری میهن`, des1: `خسابان شریعتی کوچه شهید موسوی پلاک 18`, des2: 'هزینه تصویر برداری 2.850.000 تومان ', des3: 'رزرو نزدیکترین زمان آزاد مرکز' },
    ]
    return(
        <div>
            <CompleteTitle title={"انتخاب مرکز"} />
            <Choice Data={data}></Choice>
        </div>
    )
}
export default SelectCenter