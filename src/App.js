import './App.css';
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Counter />
      <Counter1 />
    </div>
  );
}

export default App;
