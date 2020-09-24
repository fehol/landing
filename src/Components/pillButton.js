// import React from 'react';
import { css } from '@emotion/core';

const pillButton = css`
  background-color: #ffffff;
  border: none;
  color: #12b0ff;
  padding: 13px 55px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 20px 50px 30px;
  cursor: pointer;
  border-radius: 30px;
  font: Poppins;
  font-size: 15px;
  font-weight: bold;
`;

const bluePillButton = css`
  background-color: #12b0ff;
  border: none;
  color: #ffffff;
  padding: 20px 50px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0px 50px 30px;
  cursor: pointer;
  border-radius: 30px;
  font: Poppins;
  font-size: 15px;
  font-weight: bold;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
`;

export { pillButton, bluePillButton };
