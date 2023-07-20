import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import classes from "./DatePicker.module.css"
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent(props){
    const [startDate, setStartDate] = useState(new Date());
    useEffect(()=>{
        props.fromDate(startDate);

        props.toDate(startDate)
    }, [startDate])
    return(
<>
<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
wrapperClassName={classes.datepicker}/>
</>
    )
}
export default DatePickerComponent;