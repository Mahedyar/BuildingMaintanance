const SingleRow = (props) => {
  return (
    <tr>
      <td>{props.item.description}</td>
      <td>{props.item.status}</td>
      <td>{props.item.daysRemainingToNextService}</td>
      <td>{props.item.nextServiceDate}</td>
      <td>{props.item.servicePeriod}</td>
      <td>{props.item.lastServiceDate}</td>
      <td>{props.item.doneBy}</td>
      <td>{props.item.services}</td>
    </tr>
  );
};

export default SingleRow;
