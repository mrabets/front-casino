import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';
import { useAuth } from '../hooks/use-auth';

export const PaymentForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const user_id = useAuth().user_id;
  const [api_errors, setApiErrors] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      console.log('[PaymentMethod]', paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          // eslint-disable-next-line no-undef
          process.env.REACT_APP_API_URL + '/api/v1/payment/create',
          {
            payment: {
              user_id: user_id,
              // eslint-disable-next-line react/prop-types
              amount: props.amount,
              payment_id: id
            }
          }
        );

        console.log('Stripe 35 | data', response.data.message);

        // eslint-disable-next-line react/prop-types
        props.getBalance();

        setApiErrors('');
      } catch (e) {
        setApiErrors(e.response.data.error);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <div className="Own-form">
      <form onSubmit={handleSubmit} style={{ maxWidth: 700 }}>
        <label className="Error-label">{api_errors}</label>
        <CardElement />
        <button className="Pay-button btn btn-primary">Pay</button>
      </form>
    </div>
  );
};
