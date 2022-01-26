import {
  CardElement,
  useElements,
  useStripe
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

export const PaymentForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()
  const user_id = useAuth().user_id
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) return

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
  
    if (!error) {
      console.log('[PaymentMethod]', paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios
        .post(process.env.REACT_APP_API_URL + '/api/v1/payment/create',
          {
            user_id: user_id,
            amount: props.amount,
            payment_id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.message);
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error);
    }
  };

  return (  
    <div className="Own-form">
      <form onSubmit={handleSubmit} style={{ maxWidth: 700 }}>
        <CardElement />
        <button className="Pay-button btn btn-primary">
          Pay
        </button>
      </form>
    </div>
  );
}