export interface CounterContextInterface {
  state: CounterState;
  clearError: () => void;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  incrementAsync: (amount: number) => Promise<void>;
  throwError: () => void;
}

// Defines the type of the state
interface CounterState {
  counter: number;
  loading: boolean;
  error?: string;
}
// Define the initial state using that type
export const initialState: CounterState = {
  counter: 0,
  loading: false,
};
