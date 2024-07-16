/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "../../css/paymentform.css";
import { addbooking } from "../../services/bookingService";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

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
  const { flightId } = useParams<{ flightId: string }>();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handlePayment = async () => {
    const userDataString = Cookies.get("userData");
    if (!userDataString) {
      console.error("User data not found in cookies");
      return;
    }

    const userData = JSON.parse(userDataString);
    console.log(userData);

    const userId = userData.id;
    const userid = userId.toString();

    try {
      const bookingResponse = await addbooking(flightId, userid);
      console.log(bookingResponse);
      onPaymentSuccess();

      // Serialize data before passing to navigate

      // Navigate to the TicketPage with serialized data
      navigate("/ticket", {
        state: {
          booking: {
            ...bookingResponse.data,
          },
          user: userData,
        },
      });
    } catch (error) {
      console.error("Error adding booking:", error);
    }
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
          <label>Expiry Date</label>
          <br />
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
          <button onClick={handlePayment}>Pay Rs {totalPrice}</button>
          <br /><br />
          
        </div>
      </div>
    </>
  );
};

export default PaymentForm;