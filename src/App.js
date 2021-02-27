import logo from './logo.svg';
import './App.css';
import { KeyBoard } from './components/Keyboard';
import { ColorPicker } from './components/ColorPicker';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        Design your 65% Keeb
      </header>
        <KeyBoard/>
        <ColorPicker />
    </div>
  );
}

export default App;
