import React from 'react';
import styled from 'styled-components';

const FooterItem = styled.div`
  width: 33%;
`;

function Footer() {
  return(
    <footer className="page-footer row-container">
      <FooterItem>
        <a className="footer-link-left" href="https://andrewclo.com/" target="blank">My Portfolio</a>
      </FooterItem>
      <FooterItem >
        <div>Crevice Keebs &trade;</div>
      </FooterItem>
      <FooterItem>
        <a className="footer-link-right" href="https://github.com/AndrewLo42/keyboard-designer" target="blank">Git</a>
      </FooterItem>
    </footer>
  )

}

export default Footer;
