import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { useParams } from "react-router-dom";
import { getFlightById } from "../../services/flightService";
import PaymentForm from "../Flight/PaymentForm";
import "../../css/bookinginfo.css";

const BookingDetail = forwardRef((props, ref) => {
  const [flight, setFlight] = useState<any>({});
  const { flightId } = useParams<{ flightId: string }>();
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    setTotalPrice(flight.price * ticketQuantity);
  }, [ticketQuantity, flight.price]);

  useEffect(() => {
    fetchFlight();
  }, [flightId]);

  const fetchFlight = async () => {
    const response = await getFlightById(flightId);
    setFlight(response.data);
  };

  const handleIncreaseQuantity = () => {
    if (ticketQuantity < flight.capacity - flight.bookedSeats) {
      setTicketQuantity(ticketQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (ticketQuantity > 1) {
      setTicketQuantity(ticketQuantity - 1);
    }
  };

  const handleConfirmBooking = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSuccess = () => {
    // Handle post-payment success actions (e.g., redirect to confirmation page)
  };

  useImperativeHandle(ref, () => ({
    print() {
      window.print();
    },
  }));

  return (
    <>
      {!showPaymentForm ? (
        <>
          <h1>Your Booking Details...</h1>
          <div className="booking-container">
            <div className="inner">
              <p>Booking for flight ID: {flightId}</p>

              <p>
                <strong>Origin:</strong> {flight.origin}
              </p>
              <p>
                <strong>Destination:</strong> {flight.destination}
              </p>
              <p>
                <strong>Departure Time:</strong>{" "}
                {new Date(flight.departureTime).toLocaleString()}
              </p>
              <p>
                <strong>Arrival Time:</strong>{" "}
                {new Date(flight.arrivalTime).toLocaleString()}
              </p>
              <p>
                <strong>Price per Ticket:</strong> ${flight.price}
              </p>
              <h2>Select Ticket Quantity</h2>
              <div>
                <button className="add" onClick={handleDecreaseQuantity}>
                  -
                </button>

                <span>{ticketQuantity}</span>
                <button className="minus" onClick={handleIncreaseQuantity}>
                  +
                </button>
              </div>

              <h2>Total Price: Rs: INR {totalPrice}</h2>
              <button onClick={handleConfirmBooking}>Confirm Booking</button>
              <br />
          
            </div>
          </div>
        </>
      ) : (
        <PaymentForm
          totalPrice={totalPrice}
          onPaymentSuccess={handlePaymentSuccess}
          bookingDetailRef={ref}
        />
      )}
    </>
  );
});

export default BookingDetail;
