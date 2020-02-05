import React, { useState } from 'react';

import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [outs, setOuts] = useState(0);
  const [hits, setHits] = useState(0);

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
      setOuts(outs + 1)
    } else {
      setStrikes(strikes + 1)
    };
  };

  const ball = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
      setHits(hits + 1)
    } else {
      setBalls(balls + 1)
    }
  }

  const hit = () => {
    setHits(hits + 1)
    setBalls(0);
    setStrikes(0);
  }

  const out = () => {
    if (outs === 2) {
      setStrikes(0);
      setBalls(0);
      setHits(0);
      setOuts(0);
    }
  }

  return (
    <div>
      <h1>Batters Up!</h1>
      <Display strikes={strikes} balls={balls} hits={hits} outs={outs} />
      <Dashboard strike={strike} ball={ball} hit={hit} out={out} />
    </div>
  )
}

export default App;
