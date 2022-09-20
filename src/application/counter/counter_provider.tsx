import { createContext, ReactNode, useState } from 'react';
import { CounterContextInterface, initialState } from './counter_state';

// Creates context that will be used by the provider and the consumer
export const CounterContext = createContext<CounterContextInterface | null>(null);

// Creates the provider that will be used to wrap the implementation
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  // Creates the state and the "dispatch" function
  const [state, setState] = useState(initialState);
  
  // Implements the actions that will be used by the consumer
  const clearError = () => setState({ ...state, error: undefined });

  const increment = () => setState({ ...state, counter: state.counter + 1 });

  const decrement = () => setState({ ...state, counter: state.counter - 1 });

  const incrementByAmount = (amount: number) => setState({ ...state, counter: state.counter + amount });

  const incrementAsync = async (amount:number,) => {
    setState({ ...state, loading: true });
    await new Promise(resolve => setTimeout(resolve, 1000));
    setState({ ...state, counter: state.counter + amount, loading: false });
  };
  
  const throwError = () => {
    setState({ ...state, error: 'Erritos momento' });
  };
  // Returns the provider with the state and the actions
  return (
    <CounterContext.Provider value={{
      state,
      clearError,
      increment,
      decrement,
      incrementByAmount,
      incrementAsync,
      throwError
    }}>
      {children}
    </CounterContext.Provider>
  );
};