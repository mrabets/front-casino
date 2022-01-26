import { useState } from "react"
import { useAuth } from "../hooks/use-auth"
import axios from "axios";
import {StripePaymentForm} from '../Checkout/StripePaymentForm'

export const Profile = () => {
  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  };
  

  const [email, setEmail] = useState(useAuth().email)
  const [balance, setBalance] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)

  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="Email display-6 fw-normal">{email}</h1>
        <h1 className="Balance display-3 fw-normal">{balance}$</h1>
        <p className="fs-5 text-muted">
          You can top up your account here 
        </p>

        <div className="input-group justify-content-center">
          <div className="col-xs-5">
              <input type="number" onChange={(e) => setAmount(Number(e.target.value))} className="form-control"/>
          </div>
        </div>
      </div>

     
      <StripePaymentForm amount={amount}/>
    </>
  )
}