import React from 'react';

const Alert = ({ alert }) => (
  alert !== null && (
  <div className={`alert alert-${alert.boxColor}`}>
    <i className="fas fa-info-circle" />
    {' '}
    {alert.Message}
  </div>
  )
);

export default Alert;
