import React ,{useEffect, useState}from 'react';
import { useHistory, useParams} from 'react-router-dom'




function Detail25(props){
    let [alert, alertset] = useState(true);

    let[inputData,inputDataset]=useState('');

    useEffect(()=>{
        let timer = setTimeout()()=>{alertset(false)}, 2000;

        console.log('update')


    })


    useEffect(()=>{
        let time2 = setTimeout(()=>{
            alertset(false),2000
        }[aleft,inputData]);
    });

    useEffect(()=>{
        let time3 = setTimout(()=>{ inputDataset(false), 2000});
    });

    return()=>{clearTimeout(timer), []}

    return(
<div>


<input onChange={(e)=>{inputDataset(e.target.value)}}/>

{inputData}
</div>


    )

}

export default Detail25