import React, {useRef} from 'react';
import styled from 'styled-components';

interface Props {
  shadow: string;
  setShadow: (novelty: string) => void;
}

const CaseHeader = styled.div`
  font-size: 20px;
  margin-bottom: .5rem;
`;

const PickContainer = styled.div`
  width: 376px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

const CaseOption = styled.div`
  width: 50%;
  border: 1px solid black;
  margin: auto;
  margin-bottom: 1rem;
  padding: 10px;
  user-select: none;
  transition: all 100ms ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: .8;
  }
`;

const RBGOption = styled(CaseOption)`
  &:hover {
    box-shadow: 2px 2px 8px 2px #FF8080,
      -4px 2px 8px 2px #FFE488,
      -3px -2px 8px 2px #8CFF85,
      8px -2px 8px 2px #80C7FF,
      8px 6px 8px 4px #E488FF,
      -6px 6px 8px 4px #FF616B,
      -6px -3px 18px 1px #8E5CFF,
      3px 3px 8px 3px rgba(0,0,0,0);
  }
`;

const BoxOption = styled(CaseOption)`
  &:hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 6px 12px rgba(0, 0, 0, 0.12);
  }
`;

const CaseRGB: React.FC<Props> = (props) => {
  return(
    <PickContainer >
      <CaseHeader>Case Lighting</CaseHeader>
      <OptionContainer>
        <RBGOption onClick={() => props.setShadow('rainbow-box')}>Full RBG</RBGOption>
        <BoxOption onClick={() => props.setShadow('box')}>No Lighting</BoxOption>
      </OptionContainer>
    </PickContainer>

  );
}

export default CaseRGB;
