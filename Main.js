import receipts from '../Data';
import Receipt from './Receipts';
console.log(receipts);
function Main() {
  return (
    <div>
      {receipts.map((Receiptdata, index) => {
        return <Receipt Receiptdata={Receiptdata} key={index} />;
      })}
    </div>
  );
}

export default Main;
