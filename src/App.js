/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from 'react';
import { jsx, css } from '@emotion/core';
import { pillButton, bluePillButton } from './Components/pillButton';
import brainFoodLink from './Components/brainFoodLink.js';
import { section1 } from './Components/section1.js';
import { section2, section2H1, section2TextBlock } from './Components/section2';
import { section3, section3H1, section3TextBlock } from './Components/section3';
import { section4, section4H1, section4TextBlock } from './Components/section4';

import mobile1 from './Images/mobile1.png';
import mobile2 from './Images/mobile2.png';
import mobile3 from './Images/mobile3.png';
import viking from './Images/viking.png';
import logo1 from './Images/logo1.png';
import logo2 from './Images/logo2.png';
import logo3 from './Images/logo3.png';

const headerStyle = css`
  width: 100%;
  padding: 10px 0;
  position: fixed;
  top: 0;
  background: #12b0ff;
`;

const headerInnerStyles = css`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
`;

const headings = css`
  font-size: 75px;
  font-weight: bold;
  padding: 100px 0px 0px;
  margin: 0;
`;

const styleMobile1 = css`
  padding: 75px;
  width: 200px;
  height: 300px;
`;

const styleMobile2 = css`
  width: 319px;
  height: 657.25px;
  border-radius: 40px;
  padding: 80px 200px 100px;
`;

const styleMobile3 = css`
  width: 319px;
  height: 657.25px;
  border-radius: 40px;
  padding: 80px 200px 100px;
`;

const vikingStyle = css`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const footerStyle = css`
  height: 150px;
  background: #12b0ff;
`;
function App() {
  return (
    <>
      <header css={headerStyle}>
        <div css={headerInnerStyles}>
          <a href="brain" css={brainFoodLink}>
            brainfood
          </a>
          <button css={pillButton}>Get early access</button>
        </div>
      </header>
      <main>
        <section css={section1}>
          <div>
            <h1 css={headings}>
              Delightfully animated, <br></br>bite-sized knowloedge
            </h1>
            <img css={styleMobile1} alt="mobile1" src={mobile1} />
          </div>
          <div>
            <h2>Join our early access beta!</h2>
            <button css={pillButton}>Sign Up</button>
          </div>
        </section>
        <section2 css={section2}>
          <img css={styleMobile2} alt="mobile2" src={mobile2} />
          <br></br>
          <h1 css={section2H1}>
            Swipe more<br></br> productively
            <p css={section2TextBlock}>
              You deserve more than mindless Instagram and Facebook feeds. Put
              those spare minutes to use and learn something meaningful. Become
              a history buff, learn about the universe, understand how
              blockchain works, and beyond.
            </p>
          </h1>
        </section2>
        <section3 css={section3}>
          <h1 css={section3H1}>
            60 seconds
            <p css={section3TextBlock}>
              Is how long it'll take to casually learn something new. Swipe
              through all or part of a topic at your own pace, while lounging
              around at home, or on the go.
            </p>
            <img css={styleMobile3} alt="mobile2" src={mobile3} />
          </h1>
        </section3>
        <section4 css={section4}>
          <div>
            <h1 css={section4H1}>Become a beta user</h1>
            <p css={section4TextBlock}>
              We're recruiting our super users. If you love what we're building,
              fill out a 1-min survey to download the beta.
            </p>
            <img css={vikingStyle} alt="viking" src={viking} />
            <button css={bluePillButton}>Download</button>
          </div>
        </section4>
      </main>
      <footer css={footerStyle}>
        <div>
          brainfood © Copyright 2020 Brainfood, Inc. All rights reserved.
          Company Contact Us Jobs About Follow us
          <button>
            <img alt="#a" src={logo1} />
          </button>
          <button>
            <img alt="#a" src={logo2} />
          </button>
          <button>
            <img alt="#a" src={logo3} />
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
