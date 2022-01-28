import React from 'react';
import { decremented, incremented } from './stores/counter';
import { useDispatch } from 'react-redux';
export default function CounterAction() {
    const dispatch =useDispatch()
  return <div>
      <button onClick={()=>dispatch(incremented())}>Increase</button>
      <button onClick={()=>dispatch(decremented())}>Decrease</button>
  </div>
}
