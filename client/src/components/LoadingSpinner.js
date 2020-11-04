import React, { Fragment } from 'react'
import spinner from '../../public/assets/img/misc/spinner.gif'
const Spinner =  (props) => {
    return (
        <Fragment> 
            <img src={spinner} alt=" ... Loading ... " style={{ width:'100px', height:'100px' , display: 'block' , margin: 'auto'}}/>
        </Fragment>
    )
}
export default Spinner
