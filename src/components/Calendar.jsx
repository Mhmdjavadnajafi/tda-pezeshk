import { useState } from "react"
import Calendarday from "./Calendarday"

const Calendar = ()=>{
    const [isActive,setIsActive] = useState(0)
    const Data = [
        { dayname: 'یکشنبه', date:'1404/06/16 '},
        { dayname: 'یکشنبه', date: '1404/06/16 ' },
        { dayname: 'یکشنبه', date: '1404/06/16 ' },
        { dayname: 'یکشنبه', date: '1404/06/16 ' }
    ]
   return(
       <div className="w-[90%] gap-1 flex justify-between mt-4 mx-auto">
           {Data.map((date,index)=>{
               return <Calendarday onClick={()=>setIsActive(index)} key={index} dayName={date.dayname} bgColor={index === isActive ? 'bg-blue-200' : ''} textColor={index === isActive ? 'text-blue-800' : 'text-gray-400'} date={date.date}></Calendarday>
           })}
       </div>
   )
}
export default Calendar