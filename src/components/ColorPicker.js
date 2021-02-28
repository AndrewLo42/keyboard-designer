import React, {useState} from 'react';
import {HuePicker, TwitterPicker} from 'react-color';

interface Props {
  caseColor: string;
  mainKeyColor: string;
  textColor: string;
  setCaseColor: (color: string) => void;
  setMainKeyColor: (color: string) => void;
  setTextColor: (color: string) => void;
}

export const ColorPicker: React.FC<Props> = (props) => {

  // const [caseColor, setCaseColor] = useState("#fff");
  // const [mainKeyCapColor, setMainColor] = useState("#fff");
  const [colorView, setView] = useState("case");

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


  const renderCasePicker =  (
      <div className="color-picker-container">
        <div className="color-picker-title">Case Color</div>
        <HuePicker
          color={props.caseColor}
          handleChangeComplete={handleChangeCaseColor}
          onChange={handleChangeCaseColor}
        />
        <TwitterPicker
          color={props.caseColor}
          handleChangeComplete={handleChangeCaseColor}
          onChange={handleChangeCaseColor}
          triangle="hide"
          colors={['#4D4D4D', "#000000", "#F4F1F1"]}
        />
      )
        <div className="color-picker-title">Keycap Color</div>
        <HuePicker
          color={props.mainKeyColor}
          handleChangeComplete={handleChangeMainColor}
          onChange={handleChangeMainColor}
        />
        <TwitterPicker
          color={props.mainKeyColor}
          handleChangeComplete={handleChangeMainColor}
          onChange={handleChangeMainColor}
          triangle="hide"
          colors={['#4D4D4D', "#000000", "#F4F1F1"]}
        />

      <div className="color-picker-title">Key Text Color</div>
        <HuePicker
          color={props.textColor}
          handleChangeComplete={handleChangeTextColor}
          onChange={handleChangeTextColor}
        />
        <TwitterPicker
          color={props.textColor}
          handleChangeComplete={handleChangeTextColor}
          onChange={handleChangeTextColor}
          triangle="hide"
          colors={['#4D4D4D', "#000000", "#F4F1F1"]}
        />
      </div>
  )

  if(colorView === 'case') {
    return renderCasePicker;
  }


}
