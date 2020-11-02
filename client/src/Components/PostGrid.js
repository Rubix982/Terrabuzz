import React from 'react'
import Posts from './Posts.js'
import Spinner from './Spinner.js';

const GridUsersDisplay = (props) =>  
{
    if(props.loading)
    {
        return <Spinner/> ;
    }
    else
    {
        return (
            <div style={GridStyle} >
                {props.users.map( user => ( 
                    <Posts key={user.id} user_number={user}/>
                ))}
            </div>
        );
    }

}
const GridStyle =
{
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}
export default GridUsersDisplay
