import React, {useState} from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCheckbox = styled.div`
  display: inline-block;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
  border: ${props => !props.checked ? '1px solid black' : '1px solid green'};
  background: ${props => !props.checked ? null : "green"};
`;

const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  width: 100%;
  margin: 10px;
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;

const LabelText = styled.span`
  padding-top: 1px;
  font-weight: ${props => props.bolded ? "bold" : null};
`;

const CheckboxToggle = ({labelText, handleClick, startChecked, boldedText}) => {
  const [checked, setChecked] = useState(startChecked);
  const handleCheck = () => {
    handleClick(!checked);
    setChecked(!checked);
  }
  // const filterList = charityFilterList;
  return (
    <CheckboxLabel onClick={handleCheck}>
      <CheckboxContainer >
        {/* <HiddenCheckbox checked={checked} onChange={()=>console.log("change")} /> */}
        <StyledCheckbox checked={startChecked} />
        <LabelText bolded={boldedText}>{labelText}</LabelText>
      </CheckboxContainer>
    </CheckboxLabel>
  )
};

// CheckboxToggle.propTypes = {
//   labelText: PropTypes.string,
//   handleClick: PropTypes.func,
//   startChecked: PropTypes.bool,
//   boldedText: PropTypes.bool

// };

export default CheckboxToggle;
