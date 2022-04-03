import React, { useContext } from 'react';
import { MyContext } from '../context';

function Stage2() {
  const Context = useContext(MyContext)
  return (
    <>
      <div className='result_wrapper'>
        <h3>The looser is:</h3>
        <div>{Context.state.result}</div>

      </div>
      <div className='action_button' onClick={Context.startOver}>
        START OVER
      </div>
      <div className='action_button btn_2' onClick={Context.getNewLoser}>
        GET NEW LOOSER
      </div>

    </>
  );
}

export default Stage2;