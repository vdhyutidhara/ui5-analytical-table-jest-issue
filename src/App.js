import { ThemeProvider } from '@ui5/webcomponents-react';
import AnalyticalTableComp from './AnalyticalTableComp.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Analytical Table issue</h3>
      <ThemeProvider>
        <AnalyticalTableComp />
      </ThemeProvider>
    </div>
  );
}

export default App;
