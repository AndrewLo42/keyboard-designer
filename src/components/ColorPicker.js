import React, {useState} from 'react';
import {SliderPicker} from 'react-color';

// interface Props {
//   color: string;
//   handleChangeColor: (color: color) => void;
// }

export const ColorPicker: React.FC<Props> = (props) => {

  const [color, setColor] = useState("#fff");
  const handleChangeColor = (newColor) => {
    console.log('hi')
    setColor(newColor.hex);
  }

  return (
    <>
      <div>{props.color} asdf</div>
      <SliderPicker
        color={color}
        handleChangeComplete={handleChangeColor}
        onChange={handleChangeColor}
      />
    </>
  );
}
