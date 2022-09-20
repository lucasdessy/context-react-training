import { useContext, useState } from 'react';
import { CounterContext } from '../../../application/counter/counter_provider';
import { CounterContextInterface } from '../../../application/counter/counter_state';


export const CounterActionsComponent = () => {
  const counter = useContext(CounterContext) as CounterContextInterface;
  // Local state, will be dispatched to the store once the user clicks on the button
  const [incrementAmount, setIncrementAmount] = useState(0);

  return (
    <>
      <button onClick={() => counter.increment()}>Increment</button>
      <button onClick={() => counter.decrement()}>Decrement</button>
      {/* Increment by amount */}
      <input
        type="number"
       
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <button onClick={() => counter.incrementByAmount(incrementAmount)}>
        Increment by amount
      </button>
      {/* Increment asynchronously */}
      <button onClick={() => counter.incrementAsync(incrementAmount)}>
        Increment asynchronously
      </button>
      {/* Throw error button */}
      <button onClick={() => counter.throwError()}>
        Throw error
      </button>
    
    </>
  );
};