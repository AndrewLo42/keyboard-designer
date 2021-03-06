import React, {useRef} from 'react';
import styled from 'styled-components';


import {exportComponentAsPNG} from 'react-component-export-image';
interface Props {
  caseColor: string;
  mainKeyColor: string;
  textColor: string;
  modKeyColor: string;
  diffMod: boolean;
  refs: AnyStyledComponent;
  novelty: string;
  shadow: string;
}

const MainKey = styled.div`
  background: ${props => props.color};
  color: ${props => props.textColor};
`;

const CaseColor = styled.div`
  border-color: ${props => props.color};
`;

const EscKey = styled.div`
  background: ${props => props.different ? props.escColor : props.color};
  color: ${props => props.textColor};
  background-image: ${props =>
    props.novel === "Fuego" && "url('./images/novelties/fuego.png')" ||
    props.novel === "Ludwig" && "url('./images/novelties/lud7.0.png')" ||
    "url('./images/novelties/esc.png')"
  };
  background-position: center;
  background-size: cover;
`;


const ModKey = styled.div`
  background: ${props => props.different ? props.modColor : props.color};
  color: ${props => props.textColor};
`;

const SideKey = styled(ModKey)`
  background-image: ${props =>
    props.novel === "Fuego" && "url('./images/novelties/fuego.png')" ||
    props.novel === "Ludwig" && "url('./images/novelties/lud7.0.png')"
  };
  background-position: center;
  background-size: cover;
`;

const SaveButton = styled.div`
  width: 33%;
  margin: 10px auto;
  margin-top: 45px;
  padding: 10px 25px;
  border: 2px solid black;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    background: gray;
  }
`;

const KeyboardContainer = styled.div`
  padding: 10px;
  width: 1032px;
  height: 362px;
  margin: auto;
`;

export const KeyBoard: React.FC<Props> = (props) => {
  const componentRef = useRef();

  return(
    <React.Fragment>
      <SaveButton onClick={() => exportComponentAsPNG(componentRef, {fileName: "keeb"}, {backgroundColor: null} )}>
        Export As PNG
      </SaveButton>
      <KeyboardContainer ref={componentRef}>
        <CaseColor className={`keyboard ${props.shadow}`}  color={props.caseColor} id="keyboard" >
          <div className="keyboard-row">
            <EscKey className="key key-esc" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} escColor={props.modKeyColor} novel={props.novelty}>

            </EscKey>
            <MainKey className="key key-symbols"  color={props.mainKeyColor} textColor={props.textColor}>
              ! <span> 1 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor} >
              @ <span> 2 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              # <span> 3 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              $ <span> 4 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              % <span> 5 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              ^ <span> 6 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &amp; <span> 7 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              * <span> 8 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &#40; <span> 9 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &#41; <span> 0 </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              _ <span> - </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              + <span> = </span>
            </MainKey>
            <ModKey className="key key-delete key__icon" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              &#8592; Backspace
            </ModKey>
            <SideKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor} novel={props.novelty}>

            </SideKey>
          </div>

          <div className="keyboard-row">
            <ModKey className="key key-oneandhalf" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              Tab
            </ModKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              Q
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              W
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              E
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              R
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              T
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              Y
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              U
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              I
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              O
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              P
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &#123; <span> &#91; </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &#125; <span> &#93; </span>
            </MainKey>
            <MainKey className="key key-symbols key-oneandhalf" color={props.mainKeyColor} textColor={props.textColor}>
              | <span> \ </span>
            </MainKey>
            <SideKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor} novel={props.novelty}>

            </SideKey>
          </div>

          <div className="keyboard-row">
            <ModKey className="key key-caps" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              Caps
            </ModKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              A
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              S
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              D
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              F
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              G
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              H
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              J
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              K
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              L
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              : <span> ; </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              " <span> ' </span>
            </MainKey>
            <ModKey className="key key-enter" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              Enter
            </ModKey>
            <SideKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor} novel={props.novelty}>

            </SideKey>
          </div>

          <div className="keyboard-row">
            <ModKey className="key key-shift-left" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              Shift
            </ModKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              Z
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              X
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              C
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              V
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              B
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              N
            </MainKey>
            <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
              M
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &#62; <span> . </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              &#60; <span> . </span>
            </MainKey>
            <MainKey className="key key-symbols" color={props.mainKeyColor} textColor={props.textColor}>
              ? <span> / </span>
            </MainKey>
            {/* 65% */}
            <ModKey className="key key-shift-right" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              {/* 65% shift */}
              Shift
            </ModKey>
            <MainKey className="key key-arrow" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              &#8593;
              {/* up arrow */}
            </MainKey>
            <SideKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor} novel={props.novelty}>

            </SideKey>
          </div>

          <div className="keyboard-row">
            <ModKey className="key key-bottom-funct" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              CTRL
            </ModKey>
            <ModKey className="key key-bottom-funct" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              <i className="fa fa-windows"></i>
              {/* WIN */}
            </ModKey>
            <ModKey className="key key-bottom-funct" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
              ALT
            </ModKey>
            <MainKey className="key key-spacebar" color={props.mainKeyColor} textColor={props.textColor}>
              {/* spacebar */}
            </MainKey>
            <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
            </ModKey>
            <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
            </ModKey>
            <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>

            </ModKey>
            <MainKey className="key key-arrow" color={props.mainKeyColor} textColor={props.textColor}>
              &#8592;
              {/* left arrow */}
            </MainKey>
            <MainKey className="key key-arrow" color={props.mainKeyColor} textColor={props.textColor}>
              &#8595;
              {/* down arrow */}
            </MainKey>
            <MainKey className="key key-arrow" color={props.mainKeyColor} textColor={props.textColor}>
              &#8594;
              {/* right arrow */}
            </MainKey>
          </div>
        </CaseColor>
      </KeyboardContainer>

     </React.Fragment>
  );

}
