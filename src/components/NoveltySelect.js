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
  border: .5px solid black;
  padding: 2px;
  margin: 2.5px;
`;

const NoveltySelect: React.FC<Props> = (props) => {
  return(
    <div>
      <NovelHeader>
        Choose a Novelty!
      </NovelHeader>
      <KeyContainer>
        <NovelKey onClick={() => props.setNovelty('')}>None</NovelKey>
        <NovelKey novel='url("./images/novelties/fuego.png")' onClick={() => props.setNovelty('Fuego')}></NovelKey>
        <NovelKey novel='url("./images/novelties/lud7.0.png")' onClick={() => props.setNovelty('Ludwig')}></NovelKey>
      </KeyContainer>
    </div>

  );
}

export default NoveltySelect;
