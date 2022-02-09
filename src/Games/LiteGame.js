import { useEffect, useState } from 'react';
import { MdCasino } from 'react-icons/md';
import { useAuth } from '../hooks/use-auth';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Wheel } from 'react-custom-roulette';
import { getRouletteData } from '../custom/getRouletteData';
import axios from 'axios';

export const LiteGame = () => {
  const user = useAuth();
  const [betAmount, setBetAmount] = useState(0);
  const [tokenColor, setToken] = useState('');

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(-1);
  const rouletteData = getRouletteData();

  const [winMessage, setWinMessage] = useState('');
  const [loseMessage, setLoseMessage] = useState('');
  const [resultScore, setResultScore] = useState(-1);
  const [resultTokenColor, setResultTokenColor] = useState('');

  useEffect(() => {
    if (prizeIndex !== -1 && resultTokenColor) {
      setWinMessage('');
      setLoseMessage('');
      setMustSpin(true);
    }
  }, [prizeIndex]);

  const handleSpinClick = async () => {
    if (tokenColor) {
      try {
        // eslint-disable-next-line no-undef
        const response = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/roulette', {
          user_id: user.user_id,
          bet_amount: betAmount,
          bet_color: tokenColor
        });

        setResultScore(response.data.prize_score * betAmount);
        setResultTokenColor(response.data.color);

        setPrizeIndex(response.data.prize_index);
      } catch (e) {
        console.log(e.response);
      }
    }
  };

  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="Balance display-3 fw-normal">Lite Game</h1>
        <div className="input-group justify-content-center">
          <div className="col-xs-5">
            <p className="fs-5 text-muted">Your bet price $</p>
            <input
              type="number"
              onChange={(e) => setBetAmount(Number(e.target.value))}
              className="form-control"
            />
          </div>
        </div>
        <div className="Bet-buttons">
          <button
            onClick={() => setToken('red')}
            type="button"
            className="Red-button btn btn-danger">
            <MdCasino size={50} />
          </button>
          <button
            onClick={() => setToken('black')}
            type="button"
            className="Dark-button btn btn-dark">
            <MdCasino size={50} />
          </button>
        </div>

        <button onClick={handleSpinClick} className="Spin btn">
          <BsFillPlayCircleFill size={50} />
        </button>

        <div className="Result-message">
          <h2 className="Win-message">{winMessage}</h2>
          <h2 className="Lose-message">{loseMessage}</h2>
        </div>

        <div className="Wheel">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeIndex}
            data={rouletteData}
            onStopSpinning={() => {
              setMustSpin(false);

              if (tokenColor === resultTokenColor) {
                setWinMessage(`You win ${resultScore}$`);
              } else {
                setLoseMessage(`You lose ${resultScore}$`);
              }
            }}
            fontSize="30"
            innerRadius="1"
            outerBorderWidth="20"
          />
        </div>
      </div>
    </>
  );
};
