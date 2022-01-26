import { loadStripe } from "@stripe/stripe-js";
import {PaymentForm} from './PaymentForm'

import {
  Elements
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51KLkAMDdXO9Fb87CsaPmEiGHY1JCejsj4jLvckFMRfM8CEJPHtYWVpQqb42XLPHZ7pbYFHolZtYFqMIL0shqDwNt007evvQO7L");

export const StripePaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);