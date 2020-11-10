
import React from'react';
import { useHistory } from 'react-router-dom';



function Detail20_file(){

    let history = useHistory();

    // 20-(5)
    return(  
      <div className="container">
      <button onClick={()=>{history.goBack()}}>뒤로가기</button>            
            //   (7)
            <button onClick={()=>{history.push("/home")}}>뒤로가기</button> 
      </div>

  
    )
  }

export default Detail20_file;