import React, {useRef} from 'react';
import styled from 'styled-components';

interface Props {
  novelty: string;
  setNovelty: (novelty: string) => void;
}

const NovelHeader = styled.div`
  font-size: 20px;
  margin-bottom: .5rem;
`;

const KeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NovelKey = styled.div`
  width: 50px;
  height: 50px;
  float: left;
  cursor: pointer;
  background-color: whitesmoke;
  color: #000000;
  line-height: 48px;
  text-align: center;
  margin-left: 2px;
  border-radius: 4px;
  user-select: none;
  background-image: ${props => props.novel};
  background-position: center;
  background-size: contain;
  border: ${props => props.selected ? '1px solid #EE9C44' :'1px solid gray'};
  padding: 2px;
  margin: 2.5px;
  position: relative;
  transition: all 100ms ease-in-out;
  &:hover {
    filter: opacity(50%);
    border: 1px solid #C3D8D7;
  }
`;

const PickContainer = styled.div`
  width: 376px;
`;

const NoveltySelect: React.FC<Props> = (props) => {
  return(
    <PickContainer >
      <NovelHeader>
        Choose a Novelty!
      </NovelHeader>
      <KeyContainer>
        <NovelKey onClick={() => props.setNovelty('')} selected={props.novelty === '' ? true : false}>None</NovelKey>
        <NovelKey novel='url("./images/novelties/fuego.png")' onClick={() => props.setNovelty('Fuego')} selected={props.novelty === 'Fuego' ? true : false}></NovelKey>
        <NovelKey novel='url("./images/novelties/lud7.0.png")' onClick={() => props.setNovelty('Ludwig')} selected={props.novelty === 'Ludwig' ? true : false}></NovelKey>
      </KeyContainer>
    </PickContainer>

  );
}

export default NoveltySelect;
