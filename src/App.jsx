import { useEffect, useState } from "react";
import Divider from './img/pattern-divider-desktop.svg'
import Dice from './img/icon-dice.svg'
import './dist/css/app.css'

function App() {

  const [advice, setAdvice] = useState('')

  const fetchAction = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then( data => {
        setAdvice(data.slip)
      })  

    console.log('Click!')
  }


  return (
    <>
      <div className="container">
          <div className='advice-container'>
            {
              advice === '' ? (
                <h1>Ask for advice</h1>
              ) : (
                <>
                  <h4>ADVICE # {advice.id}</h4>
                  <q>{advice.advice}</q>
                </>
              )
            }
            <img  alt="Divider" />
          </div>
          <div className='button-container' onClick={() => fetchAction()}>
              <img className='button' src={Dice} alt="Dice" />
          </div>
      </div>

    </>
  );
}

export default App;