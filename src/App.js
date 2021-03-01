import logo from './logo.svg';
import './App.css';
import { KeyBoard } from './components/Keyboard';
import { ColorPicker } from './components/ColorPicker';
import React, {useState} from 'react';

function App() {
  const [caseColor, setCaseColor] = useState("#000000");
  const [mainKeyCapColor, setMainColor] = useState("#F1F1F1");
  const [textColor, setTextColor] = useState("#000000");
  const [modKeyColor, setModColor] = useState("#F1F1F1");
  const [diffMod, setDiffMod] = useState(false);
  return (
    <div className="App">
      <header>
        Design your 65% Keeb
      </header>
        <KeyBoard
          caseColor={caseColor}
          mainKeyColor={mainKeyCapColor}
          textColor={textColor}
          modKeyColor={modKeyColor}
          diffMod={diffMod}
        />
        <ColorPicker
          caseColor={caseColor}
          setCaseColor={setCaseColor}
          mainKeyColor={mainKeyCapColor}
          setMainKeyColor={setMainColor}
          textColor={textColor}
          setTextColor={setTextColor}
          modKeyColor={modKeyColor}
          setModColor={setModColor}
          diffMod={diffMod}
          setDiffMod={setDiffMod}
        />
    </div>
  );
}

export default App;
