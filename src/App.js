/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from 'react';
import { jsx, css } from '@emotion/core';
import pillButton from './Components/pillButton.js';

import mobile1 from './Images/mobile1.PNG';
import mobile2 from './Images/mobile2.PNG';

const centeredContainerStyles = css`
  max-width: 1400px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
`;

const headerStyles = css`
  padding: 0px 0px;
  position: center;
`;

const brainfood = css`
  font-size: 30px;
  font-weight: bold;
  margin: 70px 0px 0px;
  cursor: pointer;
  color: #f5f9fc;
  text-decoration: none;
`;

const headings = css`
  font-size: 75px;
  font-weight: bold;
`;

const headerInnerStyles = css`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: -100px 50px 50px;
`;

const imgMobile = css`
  padding: 75px;
  width: 267px;
  height: 523px;
  position: center;
`;

const lowerBody = css`
  background-color: #f5f9fc;
  color: black;
  max-width: 1400px;
  border: none;
`;

function App() {
  return (
    <>
      <header css={headerStyles}>
        <div css={headerInnerStyles}>
          <a href="#a" css={brainfood}>
            brainfood
          </a>
          <button css={pillButton}>Get early access</button>
        </div>
      </header>
      <main css={centeredContainerStyles}>
        <div css={headerStyles}>
          <h1 css={headings}>
            Delightfully animated, <br></br>bite-sized knowloedge
          </h1>
          <img css={imgMobile} alt="" src={mobile1} />
        </div>
        <div>
          <h2>Join our early access beta!</h2>
          <button css={pillButton}>Sign Up</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div css={lowerBody}>
          <img css={imgMobile} alt="" scr={mobile2} />
          <h2>Swipe more productively</h2>
          <p>
            You deserve more than mindless Instagram and Facebook feeds. Put
            those spare minutes to use and learn something meaningful. Become a
            history buff, learn about the universe, understand how blockchain
            works, and beyond.
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div css={lowerBody}>
          <h1>Become a beta user</h1>
          <p>
            We're recruiting our super users. If you love what we're building,
            fill out a 1-min survey to download the beta.
          </p>
          <img alt="#a" />
          <button>Download</button>
        </div>
      </main>
      <footer>
        <div>
          brainfood © Copyright 2020 Brainfood, Inc. All rights reserved.
          Company Contact Us Jobs About Follow us
          <button>
            <img alt="#a" />
          </button>
          <button>
            <img alt="#a" />
          </button>
          <button>
            <img alt="#a" />
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
