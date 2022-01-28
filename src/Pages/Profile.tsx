import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import axios from 'axios';
import { StripePaymentForm } from '../Checkout/StripePaymentForm';

export const Profile = () => {
  const { user_id } = useAuth();
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [isUpdate, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    getBalance();
    setUpdate(false);
  }, [isUpdate]);

  const getBalance = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/api/v1/users/${user_id}/balance`
      );

      const newBalance = response.data.balance;

      setBalance(newBalance);
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="Balance display-3 fw-normal">{balance}$</h1>
        <p className="Balance fs-5 text-muted">You can top up your account here</p>

        <div className="input-group justify-content-center">
          <div className="col-xs-5">
            <input
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <StripePaymentForm amount={amount} getBalance={getBalance} />
    </>
  );
};
