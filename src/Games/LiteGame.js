import { useEffect, useState } from 'react';
import { MdCasino } from 'react-icons/md';


export const LiteGame = () => {
  const [betAmount, setBetAmount] = useState(0)
  const [token, setToken] = useState('')

  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="Balance display-3 fw-normal">Lite Game</h1>
        <p className="Balance fs-5 text-muted">
          Just spin the roulette 
        </p>

        <div className="input-group justify-content-center">
          <div className="col-xs-5">
              <input type="number" onChange={(e) => setBetAmount(Number(e.target.value))} className="form-control"/>
          </div>
        </div>
        <div className='Bet-buttons'>
          <button onClick={() => setToken('red')} type="button" className="Red-button btn btn-danger">
            <MdCasino size={50}/>
          </button>   
          <button onClick={() => setToken('black')} type="button" className="Dark-button btn btn-dark">
            <MdCasino size={50}/>
          </button>
        </div>
      </div>   
    </>
  )
}