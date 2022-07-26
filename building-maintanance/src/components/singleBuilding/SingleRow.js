import classes from "./SingleRow.module.css"
import { Calendar, DatePicker } from 'react-persian-datepicker';

const SingleRow = (props) => {
  const styles = {
    calendarContainer: "calendarContainer",
    dayPickerContainer: "dayPickerContainer",
    monthsList: "monthsList",
    daysOfWeek: "daysOfWeek",
    dayWrapper: "dayWrapper",
    selected: "selected",
    heading: "heading"
  };
  return (
    <tr>
      <td>{props.item.description}</td>
      <td>{props.item.status}</td>
      <td>{props.item.daysRemainingToNextService}</td>
      <td>{props.item.nextServiceDate}</td>
      <td>{props.item.servicePeriod}</td>
      <td><input  placeholder="تاریخ را انتخاب کنید"></input></td>
      <td><input placeholder="نام را وارد کنید"/></td>
      <td>{props.item.services}</td>
    </tr>
  );
};

export default SingleRow;
