import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//https://www.npmjs.com/package/react-datepicker
interface Props {
  date: Date;
  setDate: Function;
}

export default function YmdInput(props: Props) {
  const dateStrList = props.date.toISOString().split("T")[0].split("-");
  return (
    <div className="row">
      <a>your birthday</a>
      <DatePicker
        selected={props.date}
        onChange={(date: Date) => props.setDate(date)}
        dateFormat="yyyy/MM/dd"
      />
    </div>
  );
}
