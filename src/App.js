import './App.css';
import { KeyBoard } from './components/Keyboard';
import { ColorPicker } from './components/ColorPicker';
import React, {useState} from 'react';
import Footer from './components/Footer';

function App() {
  const [caseColor, setCaseColor] = useState("#000000");
  const [mainKeyCapColor, setMainColor] = useState("#F1F1F1");
  const [textColor, setTextColor] = useState("#000000");
  const [modKeyColor, setModColor] = useState("#F1F1F1");
  const [diffMod, setDiffMod] = useState(false);
  const [novelty, setNovelty] = useState("");
  const [shadow, setShadow] = useState("box");

  return (
    <div className="App">
      <header className="page-header">
        Design your Keeb
      </header>
      <main className="page-content">
        <KeyBoard
          caseColor={caseColor}
          mainKeyColor={mainKeyCapColor}
          textColor={textColor}
          modKeyColor={modKeyColor}
          diffMod={diffMod}
          novelty={novelty}
          shadow={shadow}
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
          novelty={novelty}
          setNovelty={setNovelty}
          shadow={shadow}
          setShadow={setShadow}
        />
      </main>
      <Footer />
      {/* <footer className="page-footer">
        Crevice Keebs &trade;
      </footer> */}

    </div>
  );
}

export default App;
