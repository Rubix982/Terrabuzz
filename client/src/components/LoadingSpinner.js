import React, { Fragment } from 'react'

const Spinner =  (props) => {
    return (
        <Fragment> 
            <img src='/assets/img/misc/spinner.gif' alt=" ... Loading ... " style={{ width:'100px', height:'100px' , display: 'block' , margin: 'auto'}}/>
        </Fragment>
    )
}
export default Spinner
