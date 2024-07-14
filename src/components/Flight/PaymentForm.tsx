import { useState } from "react";
import "../../css/paymentform.css";
interface PaymentFormProps {
  totalPrice: number;
  onPaymentSuccess: () => void;
  bookingDetailRef: any;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  totalPrice,
  onPaymentSuccess,
  bookingDetailRef,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    onPaymentSuccess();
  };

  const handlePrint = () => {
    if (bookingDetailRef && bookingDetailRef.current) {
      bookingDetailRef.current.print();
      
    }
  };

  return (
    <>
    <h2>Enter Details</h2>
    <div className="payment-container">
      
      <div className="payment-form">
        <label>Card Number</label>
        <br />
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}

        />
        <br />
        <label>Expiry Date</label><br />
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <br />
        <label>CVV</label>
        <br />
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <br /><br />
        <button onClick={handlePayment}>Pay Rs {totalPrice}</button><br /><br />
        <button onClick={handlePrint} id="print">Print</button>
      </div>
    </div></>
    
  );
};

export default PaymentForm;
