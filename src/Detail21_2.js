import React from  'react';

import {useParams} from 'react-router-dom'


function Detail21_2(props){

let {id}=useParams();

let 찾은상품 = props.shoes.find(
    function(a){
        return a.id ==id

    }
);

    return(

        <div>
        9
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="10%" />
       <h4 >{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}원</p>   
        </div>
    )
}
export default Detail21_2