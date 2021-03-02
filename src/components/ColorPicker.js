import React, {useState} from 'react';
import {HuePicker, TwitterPicker, ChromePicker} from 'react-color';
import styled from 'styled-components';
import CheckboxToggle from './CheckBox';
import Switch from './ToggleSwitch';

interface Props {
  caseColor: string;
  mainKeyColor: string;
  textColor: string;
  modKeyColor: string;
  diffMod: boolean;
  setCaseColor: (color: string) => void;
  setMainKeyColor: (color: string) => void;
  setTextColor: (color: string) => void;
  setModColor: (color: string) => void;
  setDiffMod: (toggle: boolean) => void;
}

  const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    margin-top: 15px;
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

export const ColorPicker: React.FC<Props> = (props) => {

  // const [caseColor, setCaseColor] = useState("#fff");
  // const [mainKeyCapColor, setMainColor] = useState("#fff");
  const [colorView, setView] = useState("case");
  const [showAdvanced, setAdvanced] = useState(false);

  const handleChangeCaseColor = (newColor) => {
    // console.log('hi')
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
      <div className="color-picker-title">Case Color</div>
      {showAdvanced ? (
        <ChromePicker
          color={props.caseColor}
          handleChangeComplete={handleChangeCaseColor}
          onChange={handleChangeCaseColor}
        />
      ) : (
        <HuePicker
          color={props.caseColor}
          handleChangeComplete={handleChangeCaseColor}
          onChange={handleChangeCaseColor}
        />
      )}

      <TwitterPicker
        color={props.caseColor}
        handleChangeComplete={handleChangeCaseColor}
        onChange={handleChangeCaseColor}
        triangle="hide"
        colors={['#4D4D4D', "#F4F1F1", "#CFFFE5", "#FE0016", "#A482FF", "#BDDEEC", "#3EB489"]}
      />
    </div>
  );

 const renderKeysPicker = (
   <div className="color-picker-container">
      <div className="color-picker-title">Keycap Color</div>
        {showAdvanced ? (
          <ChromePicker
            color={props.mainKeyColor}
            handleChangeComplete={handleChangeMainColor}
            onChange={handleChangeMainColor}
          />
        ) : (
          <HuePicker
            color={props.mainKeyColor}
            handleChangeComplete={handleChangeMainColor}
            onChange={handleChangeMainColor}
          />
        )}
        <TwitterPicker
          color={props.mainKeyColor}
          handleChangeComplete={handleChangeMainColor}
          onChange={handleChangeMainColor}
          triangle="hide"
          colors={['#4D4D4D', "#F4F1F1", "#CFFFE5", "#FE0016", "#A482FF", "#BDDEEC", "#3EB489"]}
        />

      <div className="color-picker-title">Key Text Color</div>
        {showAdvanced ? (
          <ChromePicker
            color={props.textColor}
            handleChangeComplete={handleChangeTextColor}
            onChange={handleChangeTextColor}
          />
        ) : (
          <HuePicker
            color={props.textColor}
            handleChangeComplete={handleChangeTextColor}
            onChange={handleChangeTextColor}
          />
        )}
        <TwitterPicker
          color={props.textColor}
          handleChangeComplete={handleChangeTextColor}
          onChange={handleChangeTextColor}
          triangle="hide"
          colors={['#4D4D4D', "#F4F1F1", "#CFFFE5", "#FE0016", "#A482FF", "#BDDEEC", "#3EB489"]}
        />
    </div>
  )

  const renderMiscPicker = (
    <div className="color-picker-container">
      <CheckboxToggle labelText="Different Modifier Colors" handleClick={props.setDiffMod} startChecked={props.diffMod}/>
      {props.diffMod ? (
        <React.Fragment>
          <h5 className="color-picker-title">Modifier Key Color</h5>
            {showAdvanced ? (
              <ChromePicker
                color={props.modKeyColor}
                handleChangeComplete={handleChangeModColor}
                onChange={handleChangeModColor}
              />
            ) : (
              <HuePicker
                color={props.modKeyColor}
                handleChangeComplete={handleChangeModColor}
                onChange={handleChangeModColor}
              />
            )}

          <TwitterPicker
            color={props.modKeyColor}
            handleChangeComplete={handleChangeModColor}
            onChange={handleChangeModColor}
            triangle="hide"
            colors={['#4D4D4D', "#F4F1F1", "#CFFFE5", "#FE0016", "#A482FF", "#BDDEEC", "#3EB489"]}
          />
        </React.Fragment>
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
