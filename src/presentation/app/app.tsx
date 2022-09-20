import { CounterProvider } from '../../application/counter/counter_provider';
import { CounterPage } from '../counter/counter_page';

export const App = () => {
  return (
    <>
      <CounterProvider >
        <CounterPage />
      </CounterProvider>
    </>
  );
};