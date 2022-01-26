import { useState } from "react"
import { useAuth } from "../hooks/use-auth"
import axios from "axios";
import {StripePaymentForm} from '../Checkout/StripePaymentForm'

export const Profile = () => {
  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };

  const [user, setUser] = useState(useAuth())

  const onSubmitPay = async (amount: number) => {
    
  } 

  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">{user.email}</h1>
        <p className="fs-5 text-muted">
          You can top up your account here 
        </p>
      </div>

      <StripePaymentForm />
    </>
  )
}