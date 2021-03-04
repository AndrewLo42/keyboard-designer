import React from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 34px;
  height: 17px;
  background: ${(props) => (props.isOn ? "#B7B7B7" : "#d3d3d3")};
  border-radius: 8.5px;
  position: relative;
  transition: background-color 0.2s;
  margin: auto;
`;

const SwitchButton = styled.span`
  position: absolute;
  left: ${(props) => (props.isOn ? "calc(100% - 16px)" : "1px")};
  width: 15px;
  height: 15px;
  background: ${(props) => (props.isOn ? "#F1F1F1" : "white")};
  transition: 0.2s;
  border-radius: 8.5px;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.05);
  top: 6px;
`;

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.div`
  color: gray;
  font-size: 11px;
  margin-top: 5px;
`;

 interface Props {
  on: boolean;
  handleOn: (toggle: boolean) => void;
  labelText: string;
}

const Switch: React.FC<Props> = ({ on, handleOn, labelText }) => {
  return (
    <FullContainer>
      <SwitchContainer isOn={on} onClick={() => handleOn(!on)}>
        <SwitchButton isOn={on} />
      </SwitchContainer>
      <LabelText>{labelText}</LabelText>
    </FullContainer>
  );
};

export default Switch;
