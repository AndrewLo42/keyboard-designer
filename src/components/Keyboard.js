import React from 'react';
import styled from 'styled-components';

interface Props {
  caseColor: string;
  mainKeyColor: string;
  textColor: string;
  modKeyColor: string;
  diffMod: boolean;
}

const MainKey = styled.div`
  background: ${props => props.color};
  color: ${props => props.textColor};
`;

const CaseColor = styled.div`
  border-color: ${props => props.color};
`;

const EscKey = styled.div`
  background: ${props => props.different ? props.escColor : props.color}
`;

const ModKey = styled.div`
  background: ${props => props.different ? props.modColor : props.color};
  color: ${props => props.textColor};
`;

export const KeyBoard: React.FC<Props> = (props) => {


  return(
    <CaseColor className="keyboard"  color={props.caseColor} >
      <div className="row">
        <EscKey className="key key__esc" color={props.mainKeyColor} textColor={props.textColor}>
          Esc
        </EscKey>
        <MainKey className="key key__symbols"  color={props.mainKeyColor} textColor={props.textColor}>
          ! <span> 1 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor} >
          @ <span> 2 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          # <span> 3 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          $ <span> 4 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          % <span> 5 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          ^ <span> 6 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &amp; <span> 7 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          * <span> 8 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &#40; <span> 9 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &#41; <span> 0 </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          _ <span> - </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          + <span> = </span>
        </MainKey>
        <MainKey className="key key__delete key__icon" color={props.mainKeyColor} textColor={props.textColor}>
          &#8592; Backspace
          {/* <i data-feather="delete"></i> */}
        </MainKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>

        </ModKey>
      </div>

      <div className="row">
        <ModKey className="key key__oneandhalf" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          Tab
          {/* <i data-feather="log-in"></i> */}
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
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &#123; <span> &#91; </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &#125; <span> &#93; </span>
        </MainKey>
        <MainKey className="key key__symbols key__oneandhalf" color={props.mainKeyColor} textColor={props.textColor}>
          | <span> \ </span>
        </MainKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>

        </ModKey>
      </div>

      <div className="row">
        <ModKey className="key key__caps" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          Caps
          {/* <i data-feather="meh"></i> */}
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
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          : <span> ; </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          " <span> ' </span>
        </MainKey>
        <ModKey className="key key__enter" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          Enter
        </ModKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>

        </ModKey>
      </div>

      <div className="row">
        <ModKey className="key key__shift-left" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
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
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &#62; <span> . </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          &#60; <span> . </span>
        </MainKey>
        <MainKey className="key key__symbols" color={props.mainKeyColor} textColor={props.textColor}>
          ? <span> / </span>
        </MainKey>
        {/* 65% */}
        <ModKey className="key key__shift-right" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          {/* 65% shift */}
          Shift
        </ModKey>
        {/* <MainKey className="key" color={props.mainKeyColor} textColor={props.textColor}>
          <i data-feather="arrow-up-circle"></i>
        </MainKey> */}
        <MainKey className="key key__arrow" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          {/* <i data-feather="arrow-up"></i> */}
          &#8593;
        </MainKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>

        </ModKey>
      </div>

      <div className="row">
        <ModKey className="key key__bottom-funct" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          CTRL
        </ModKey>
        <ModKey className="key key__bottom-funct" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          <i className="fa fa-windows"></i>
          {/* WIN */}
        </ModKey>
        <ModKey className="key key__bottom-funct" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          ALT
          {/* <i data-feather="command"></i> */}
        </ModKey>
        <MainKey className="key key__spacebar" color={props.mainKeyColor} textColor={props.textColor}>
          {/* spacebar */}
        </MainKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          {/* <i data-feather="command"></i> */}
        </ModKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>
          {/* <i data-feather="activity"></i> */}
        </ModKey>
        <ModKey className="key" color={props.mainKeyColor} textColor={props.textColor} different={props.diffMod} modColor={props.modKeyColor}>

        </ModKey>
        <MainKey className="key key__arrow" color={props.mainKeyColor} textColor={props.textColor}>
          &#8592;
          {/* <i data-feather="arrow-left"></i> */}
        </MainKey>
        <MainKey className="key key__arrow" color={props.mainKeyColor} textColor={props.textColor}>
          &#8595;
          {/* <i data-feather="arrow-down"></i> */}
        </MainKey>
        <MainKey className="key key__arrow" color={props.mainKeyColor} textColor={props.textColor}>
          &#8594;
          {/* <i data-feather="arrow-right"></i> */}
        </MainKey>
      </div>
     </CaseColor>
  );

}
