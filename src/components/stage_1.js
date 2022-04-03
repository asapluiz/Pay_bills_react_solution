import React, { useContext, useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { MyContext } from '../context';



function Stage1() {
  const Context = useContext(MyContext)
  const inputText = useRef();
  const [error, setError] = useState([false, ""]);
  


  const handleForm = (e) => {
    e.preventDefault();
    const value = inputText.current.value;
    const checkError = handleError(value)

    if (!checkError) {
      setError([false, ""]);
      Context.addPlayer(value)
    }


    inputText.current.value = "";

  }

  const handleError = (value) => {

    if (value === "") {
      setError([true, "field cannot be empty"])
      return true
    }

    if (value.length <= 2) {
      setError([true, "characters must be greater than 2"])
      return true
    }

    return false;
  }

  return (

    <div >
      {console.log(Context.state.players)}
      <Form onSubmit={handleForm} className='mt-4'>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="type in player"
            name="player"
            ref={inputText}
          />
        </Form.Group>
        {
          error[0] ?
            <Alert variant='danger'>{error[1]}</Alert>
            : null

        }
        <Button type="submit" className='miami mt-2' variant="primary">
          Add player
        </Button>
        {
          Context.state.players && Context.state.players.length > 0  ?
            <>
            <ul className='list-group'>
              {
                Context.state.players.map((items, index)=>{
                  return (
                    <li key={index} className="list-group-item d-flex 
                    justify-content-between align-items-center
                    list-group-item-action">
                      {items}
                    <span className='badge badge-danger' onClick={()=>{Context.removePlayer(index)}}>
                      x</span>
                    </li>
                  )
                })
              }
            </ul>
            <div className='action_button' onClick={Context.nextHandler}
            >
              Next
              </div>
            </>
            : null
        }
      </Form>
    </div>
  );
}

export default Stage1;