import React, {useState} from 'react';
import styled from 'styled-components';
import CheckboxToggle from './CheckBox';
import Switch from './ToggleSwitch';
import ColorComponent from './ColorChanger';
import NoveltySelect from './NoveltySelect';
import CaseRGB from './CaseRGB';

interface Props {
  caseColor: string;
  mainKeyColor: string;
  textColor: string;
  modKeyColor: string;
  diffMod: boolean;
  novelty: string;
  shadow: string;
  setCaseColor: (color: string) => void;
  setMainKeyColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setModColor: (color: string) => void;
  setDiffMod: (toggle: boolean) => void;
  setNovelty: (novelty: string) => void;
  setShadow: (shadow: string) => void;
}

  const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    margin-top: 2.5rem;
  `;
  const OptionButton = styled.div`
    margin: 10px 25px;
    padding: 10px 25px;
    border: ${props => props.view === props.currentView ? `2.5px solid ${props.caseColor}` : "2.5px solid gray"};
    border-radius: 5px;
    background: ${props => props.view === props.currentView ? "gray" : "white"};
    transition: all 200ms ease-in-out;
    &:hover {
      cursor: pointer;
      background: #C3D8C7;
    }
  `;
  const MiscContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
  `;

export const ColorPicker: React.FC<Props> = (props) => {

  const [colorView, setView] = useState("case");
  const [showAdvanced, setAdvanced] = useState(false);

  const handleChangeCaseColor = (newColor) => {
    props.setCaseColor(newColor.hex);
  }

  const handleChangeMainColor = (newColor) => {
    props.setMainKeyColor(newColor.hex);
  }

  const handleChangeTextColor = (newColor) => {
    props.setTextColor(newColor.hex);
  }

  const handleChangeModColor = (newColor) => {
    props.setModColor(newColor.hex);
  }

  const renderCasePicker =  (
    <div className="color-picker-container">
      <ColorComponent color={props.caseColor} handleChange={handleChangeCaseColor} showAdvanced={showAdvanced} headerText="Case Color"/>
    </div>
  );

  const renderKeysPicker = (
    <div className="color-picker-container">
      <ColorComponent color={props.mainKeyColor} handleChange={handleChangeMainColor} showAdvanced={showAdvanced} headerText="Keycap Color"/>
      <ColorComponent color={props.textColor} handleChange={handleChangeTextColor} showAdvanced={showAdvanced} headerText="Key Text Color"/>
    </div>
  )

  const renderMiscPicker = (
    <div className="color-picker-container col">
      <CheckboxToggle labelText="Enable Other Options" handleClick={props.setDiffMod} startChecked={props.diffMod}/>
      {props.diffMod ? (
        <MiscContainer>
          <CaseRGB shadow={props.shadow} setShadow={props.setShadow}/>
          <ColorComponent color={props.modKeyColor} handleChange={handleChangeModColor} showAdvanced={showAdvanced} headerText="Modifier Key Color"/>
          <NoveltySelect novelty={props.novelty} setNovelty={props.setNovelty}/>
        </MiscContainer>
      ) : null}
    </div>
  )

  const renderColorPicker = () => {
    if(colorView === 'case') {
      return renderCasePicker;
    } else if (colorView === 'keycaps') {
      return renderKeysPicker;
    } else if (colorView === 'misc') {
      return renderMiscPicker;
    } else {
      return <div>Something went wrong...</div>
    }
  }

  return (
    <div>
      <OptionContainer>
        <OptionButton onClick={() => setView("case") } view="case" currentView={colorView} caseColor={props.caseColor}>
          Case
        </OptionButton>
        <OptionButton onClick={() => setView("keycaps")} view="keycaps" currentView={colorView} caseColor={props.caseColor}>
          Keycaps
        </OptionButton>
        <OptionButton onClick={() => setView("misc")} view="misc" currentView={colorView} caseColor={props.caseColor}>
          Misc
        </OptionButton>
      </OptionContainer>
      <OptionContainer>
        <Switch on={showAdvanced} handleOn={setAdvanced} labelText={"Toggle Advanced Settings"}/>
      </OptionContainer>
      {renderColorPicker()}
    </div>
  );


}
