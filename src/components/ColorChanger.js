import React, {useRef} from 'react';
import {HuePicker, TwitterPicker, ChromePicker} from 'react-color';

interface Props {
  color: string;
  handleChange:(color: string) => void;
  showAdvanced: boolean;
  headerText: string;
}

const ColorComponent: React.FC<Props> = ({color, handleChange, showAdvanced, headerText}) => {

  return(
    <div className="col">
      <div className="color-picker-title">{headerText}</div>
        {showAdvanced ? (
          <ChromePicker
            color={color}
            handleChangeComplete={handleChange}
            onChange={handleChange}
          />
        ) : (
          <HuePicker
            color={color}
            handleChangeComplete={handleChange}
            onChange={handleChange}
          />
        )}
        <TwitterPicker
          color={color}
          handleChangeComplete={handleChange}
          onChange={handleChange}
          triangle="hide"
          colors={['#4D4D4D', "#F4F1F1", "#CFFFE5", "#FE0016", "#A482FF", "#BDDEEC", "#3EB489"]}
        />
    </div>

  )
}

export default ColorComponent;
