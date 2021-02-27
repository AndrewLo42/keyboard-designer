import React from 'react';

export const KeyBoard: React.FC<Props> = (props) => {
  return(
    <div className="keyboard">
      <div className="row">
        <div className="key key__esc">
          <i data-feather="x"></i>
        </div>
        <div className="key key__symbols">
          ! <span> 1 </span>
        </div>
        <div className="key key__symbols">
          @ <span> 2 </span>
        </div>
        <div className="key key__symbols">
          # <span> 3 </span>
        </div>
        <div className="key key__symbols">
          $ <span> 4 </span>
        </div>
        <div className="key key__symbols">
          % <span> 5 </span>
        </div>
        <div className="key key__symbols">
          ^ <span> 6 </span>
        </div>
        <div className="key key__symbols">
          &amp; <span> 7 </span>
        </div>
        <div className="key key__symbols">
          * <span> 8 </span>
        </div>
        <div className="key key__symbols">
          &#40; <span> 9 </span>
        </div>
        <div className="key key__symbols">
          &#41; <span> 0 </span>
        </div>
        <div className="key key__symbols">
          _ <span> - </span>
        </div>
        <div className="key key__symbols">
          + <span> = </span>
        </div>
        <div className="key key__delete key__icon">
          &#8592; Backspace
          {/* <i data-feather="delete"></i> */}
        </div>
        <div className="key">

        </div>
      </div>

      <div className="row">
        <div className="key key__oneandhalf">
          Tab
          {/* <i data-feather="log-in"></i> */}
        </div>
        <div className="key">
          Q
        </div>
        <div className="key">
          W
        </div>
        <div className="key">
          E
        </div>
        <div className="key">
          R
        </div>
        <div className="key">
          T
        </div>
        <div className="key">
          Y
        </div>
        <div className="key">
          U
        </div>
        <div className="key">
          I
        </div>
        <div className="key">
          O
        </div>
        <div className="key">
          P
        </div>
        <div className="key key__symbols">
          &#123; <span> &#91; </span>
        </div>
        <div className="key key__symbols">
          &#125; <span> &#93; </span>
        </div>
        <div className="key key__symbols key__oneandhalf">
          | <span> \ </span>
        </div>
        <div className="key">

        </div>
      </div>

      <div className="row">
        <div className="key key__caps">
          Caps
          {/* <i data-feather="meh"></i> */}
        </div>
        <div className="key">
          A
        </div>
        <div className="key">
          S
        </div>
        <div className="key">
          D
        </div>
        <div className="key">
          F
        </div>
        <div className="key">
          G
        </div>
        <div className="key">
          H
        </div>
        <div className="key">
          J
        </div>
        <div className="key">
          K
        </div>
        <div className="key">
          L
        </div>
        <div className="key key__symbols">
          : <span> ; </span>
        </div>
        <div className="key key__symbols">
          " <span> ' </span>
        </div>
        <div className="key key__enter">
          Enter
          {/* <i data-feather="corner-down-left"></i> */}
        </div>
        <div className="key">

        </div>
      </div>

      <div className="row">
        <div className="key key__shift-left">
          Shift
          {/* <i data-feather="arrow-up-circle"></i> */}
        </div>
        <div className="key">
          Z
        </div>
        <div className="key">
          X
        </div>
        <div className="key">
          C
        </div>
        <div className="key">
          V
        </div>
        <div className="key">
          B
        </div>
        <div className="key">
          N
        </div>
        <div className="key">
          M
        </div>
        <div className="key key__symbols">
          &#62; <span> . </span>
        </div>
        <div className="key key__symbols">
          &#60; <span> . </span>
        </div>
        <div className="key key__symbols">
          ? <span> / </span>
        </div>
        {/* 65% */}
        <div className="key key__shift-right">
          {/* 65% shift */}
          Shift
        </div>
        {/* <div className="key">
          <i data-feather="arrow-up-circle"></i>
        </div> */}
        <div className="key key__arrow">
          {/* <i data-feather="arrow-up"></i> */}
          &#8593;
        </div>
        <div className="key">
          <i data-feather="trash-2"></i>
        </div>
      </div>

      <div className="row">
        <div className="key key__bottom-funct">
          CTRL
        </div>
        <div className="key key__bottom-funct">
          <i className="fa fa-windows"></i>
          {/* WIN */}
          {/* <i data-feather="activity"></i> */}
        </div>
        <div className="key key__bottom-funct">
          ALT
          {/* <i data-feather="command"></i> */}
        </div>
        <div className="key key__spacebar">
        </div>
        <div className="key">
          <i data-feather="command"></i>
        </div>
        <div className="key">
          <i data-feather="activity"></i>
        </div>
        <div className="key">
          <i data-feather="activity"></i>
        </div>
        <div className="key key__arrow">
          &#8592;
          {/* <i data-feather="arrow-left"></i> */}
        </div>
        <div className="key key__arrow">
          &#8595;
          {/* <i data-feather="arrow-down"></i> */}
        </div>
        <div className="key key__arrow">
          &#8594;
          {/* <i data-feather="arrow-right"></i> */}
        </div>
      </div>
     </div>
  );

}
