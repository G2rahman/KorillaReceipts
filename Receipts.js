function Receipt(props) {
  //const{receipt}
  return (
    <div className="Receipt">
      <h1>person: {props.Receiptdata.person}</h1>
      <h1>main: {props.Receiptdata.main}</h1>
      <h1>protein: {props.Receiptdata.protein}</h1>
      <h1>rice: {props.Receiptdata.rice}</h1>
      <h1>sauce: {props.Receiptdata.sauce}</h1>
      <h1>drink: {props.Receiptdata.drink}</h1>
      <h1>cost: {props.Receiptdata.cost}</h1>
    </div>
  );
}

export default Receipt;
