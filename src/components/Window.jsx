import React,{useState,useEffect} from 'react';

export default function Window(){
    const[windowsize,setWindowsize] = useState(window.innerWidth);

    const handleresize=()=>{
        setWindowsize(window.innerWidth);

    }
   
    useEffect(()=>{
        window.addEventListener('resize',handleresize);
        return ()=>{window.removeEventListener('resize',handleresize);}
    },[])
  
    return(
        <div>
            {windowsize}  
        </div>
    )
}

