import { useEffect, useState } from 'react';
import { MdCasino } from 'react-icons/md';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Wheel } from 'react-custom-roulette'
import {getRouletteData} from '../custom/getRouletteData'

let rouletteData = null

export const LiteGame = () => {
  const [betAmount, setBetAmount] = useState(0)
  const [token, setToken] = useState('')

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  rouletteData = rouletteData || getRouletteData()

  useEffect(() => {
    calculatePrize()
  }, [prizeNumber]);

  const handleSpinClick = async () => {
    if (token) {
      const newPrizeNumber = Math.floor(Math.random() * rouletteData.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  const calculatePrize = () => {
    const score = Number(rouletteData[prizeNumber].option)
    const prizeColor = rouletteData[prizeNumber].style.backgroundColor
    
    console.log(score)
    console.log(prizeColor)
    // betAmount * Number(rouletteData[prizeNumber].style)
  }

  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="Balance display-3 fw-normal">Lite Game</h1>
        <div className="input-group justify-content-center">
          <div className="col-xs-5">
            <p className="fs-5 text-muted">
              Your bet price $
            </p>
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

        <button onClick={handleSpinClick} className='Spin btn'>
          <BsFillPlayCircleFill size={50}/>
        </button>
        
        <div className="Wheel">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={rouletteData}

          onStopSpinning={() => {
            setMustSpin(false)
          }}

          fontSize='30'
          innerRadius='1'
          outerBorderWidth='20'
        />
        </div>
      </div>   
    </>
  )
}