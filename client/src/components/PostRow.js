import React from 'react'
import Posts from './Posts.js'
import Spinner from './Spinner.js';
const RowUsers = (props) =>  
{
    if(props.loading)
    {
        return <Spinner/> ;
    }
    else
    {
        return (
            <div >
                {props.users.map( user => ( 
                    <Posts key={user.id} user_number={user}/>
                ))}
            </div>
        );
    }

}
export default RowUsers
