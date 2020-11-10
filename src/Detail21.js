import React from  'react';

import {useHistory,  useParams} from 'react-router-dom'


function Detail21(props){

    let history = useHistory();
    
    let{ id }=useParams()

    return(
        <div>21
        <p>file.{props.shoes[id].title}</p>
        <p>file.{props.shoes[id].content}</p>
        <p>file.{props.shoes[id].price}</p>
        
        </div>
    )
}
export default Detail21