import React from 'react'

const Alert = (props) => {
    return (
        props.alert !== null && (
          <div className={`alert alert-${props.alert.boxColor}`}>
            <i className='fas fa-info-circle' /> {props.alert.Message}
          </div>
        )
      );
}

export default Alert