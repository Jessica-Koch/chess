import React, { ChangeEvent } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = React.useState('');

  const submitPosition = () => {};

  const onPositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPosition(value);
  };

  return (
    <div className='app'>
      <h3 className='title'>Chess</h3>
      <div id='FenInDiv'>
        Fen: <br />
        <input
          onChange={onPositionChange}
          aria-label='set position'
          value={position}
          type='text'
          id='fenIn'
        />
        <button onClick={submitPosition} type='button' id='SetFen'>
          Set Position
        </button>
      </div>
    </div>
  );
}

export default App;
