import { useContext } from 'react';
import { CounterContext } from '../../application/counter/counter_provider';
import { CounterContextInterface } from '../../application/counter/counter_state';

import { CounterActionsComponent } from './components/counter';

export const CounterPage = () => {
  // Tries to get the context from the nearest provider
  const counter = useContext(CounterContext) as CounterContextInterface;
 
  return (
    <div>
      <h1>Counter { counter.state.counter }</h1>
      <CounterActionsComponent />
      {/* Render loading */}
      {counter.state.loading && <p>Loading...</p>}
      {/* Render error */}
      {counter.state.error && <p>{counter.state.error}</p>}
      {/* Clear error button */}
      {counter.state.error && <button onClick={() => counter.clearError()}>Clear error</button>}
    </div>
  );
};