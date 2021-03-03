import React, {useState} from 'react';
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
  border: ${props => !props.checked ? '1px solid black' : '1px solid #C3D8C7'};
  background: ${props => !props.checked ? null : "#C3D8C7"};

`;

const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  width: 250px;
  margin: 10px auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;

const LabelText = styled.span`
  padding-top: 1px;
  font-weight: ${props => props.bolded ? "bold" : null};
`;

interface Props {
  labelText: string;
  handleClick: (toggle: boolean) => void;
  startChecked: boolean;
  boldedText: boolean;
}

const CheckboxToggle: React.FC<Props> = ({labelText, handleClick, startChecked, boldedText}) => {
  const [checked, setChecked] = useState(startChecked);
  const handleCheck = () => {
    handleClick(!checked);
    setChecked(!checked);
  }
  // const filterList = charityFilterList;
  return (
    <CheckboxLabel aria-label="Modifier Toggle Checkbox" onClick={handleCheck}>
      <CheckboxContainer >
        {/* <HiddenCheckbox checked={checked} onChange={()=>console.log("change")} /> */}
        <StyledCheckbox checked={startChecked} />
        <LabelText bolded={boldedText}>{labelText}</LabelText>
      </CheckboxContainer>
    </CheckboxLabel>
  )
};

export default CheckboxToggle;
