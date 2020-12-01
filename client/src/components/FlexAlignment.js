import React from 'react';
import ComponentStyling from '../style/Alignment.module.css';

export const CenterAlign = ({ children, style }) => (
  <>
    <div style={style} className={ComponentStyling.centerAlign}>
      {children}
    </div>
  </>
);

export const RightAlign = ({ children, style }) => (
  <>
    <div style={style} className={ComponentStyling.rightAlign}>
      {children}
    </div>
  </>
);

export const LeftAlign = ({ children, style }) => (
  <>
    <div style={style} className={ComponentStyling.leftAlign}>
      {children}
    </div>
  </>
);
