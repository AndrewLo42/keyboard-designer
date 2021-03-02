import React from "react";
import styled from "styled-components";

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 34px;
  height: 17px;
  background: ${(props) => (!props.isOn ? props.theme.colorBrand02 : "#d3d3d3")};
  border-radius: 8.5px;
  position: relative;
  transition: background-color 0.2s;
`;

const SwitchButton = styled.span`
  position: absolute;
  left: ${(props) => (!props.isOn ? "calc(100% - 16px)" : "1px")};
  width: 15px;
  height: 15px;
  background: #ffffff;
  transition: 0.2s;
  border-radius: 8.5px;
  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.05);
`;

 interface Props {
  on: boolean;
  handleOn: (toggle: boolean) => void;
}

const Switch: React.FC<Props> = ({ on, handleOn }) => {
  return (
    <>
      <SwitchContainer isOn={on} onClick={handleOn}>
        <SwitchButton isOn={on} />
      </SwitchContainer>
    </>
  );
};

export default Switch;
