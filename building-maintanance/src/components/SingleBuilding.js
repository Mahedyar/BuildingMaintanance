import DATA from "./DATA";
import classes from "./SingleBuilding.module.css";
import SingleRow from "./SingleRow";

const { buildingData } = DATA;

const SingleBuilding = () => {
  const tableData = buildingData.map((item) => <SingleRow item={item} />);
  return (
    <>
      <table className={classes.table}>
        <tr>
          <th>توضیحات</th>
          <th>وضعیت</th>
          <th>روز های باقی مانده به سرویس بعدی </th>
          <th>تاریخ سرویس بعدی</th>
          <th>دوره سرویس روز</th>
          <th>تاریخ آخرین سرویس</th>
          <th>مسئول مربوطه</th>
          <th>خدمات و سرویس ها</th>
        </tr>
        {tableData}
        {/* <tr>
          
         

          
          
        </tr> */}
      </table>
    </>
  );
};

export default SingleBuilding;
