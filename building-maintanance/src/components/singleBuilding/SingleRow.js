import classes from "./SingleRow.module.css";
import { Calendar, DatePicker } from "react-persian-datepicker";
import {
  DateTimeInput,
  DateTimeInputSimple,
  DateInput,
  DateInputSimple,
} from "react-hichestan-datetimepicker";
import { useState } from "react";

const SingleRow = (props) => {
  const styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading",
  };
  const [state , setState] = useState("")
  const handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    // this.setState(newState);
    setState(newState)
  };
  console.log(state);
  return (
    <tr>
      <td>{props.item.description}</td>
      <td>{props.item.status}</td>
      <td>{props.item.daysRemainingToNextService}</td>
      <td>{props.item.nextServiceDate}</td>
      <td>{props.item.servicePeriod}</td>
      {/* <td><input  placeholder="تاریخ را انتخاب کنید"></input></td> */}
      <td >
        {" "}
        <DateInput
          value={state.myDateTime}
          name={"myDateTime"}
          onChange={handleChange}
        />
        {/* <DateInputSimple
          value={state.myDateTime}
          name={"myDateTime"}
          onChange={handleChange}
        /> */}
      </td>
      <td>
        <input placeholder="نام را وارد کنید" />
      </td>
      <td>{props.item.services}</td>
    </tr>
  );
};

export default SingleRow;
