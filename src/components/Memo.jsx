import React,{useState,useMemo} from 'react';

export default function Memo(){
    const [number,setCount] = useState(()=>{
        return 0;
    });
    const [dark,setDark] = useState(true);
    const doubleNumber = useMemo(()=>{
        return slowfunction(number);
    },[number])
    const ThemeStyles={
        backgroundColor : dark?'black':'white',
        color : dark?'white':'black'
    }
    return(
        <div>
            <input type = "number" value={number} onChange={e=>setCount(parseInt(e.target.value))}/>
            <button onClick={()=>setDark(prevdark=>!prevdark)}>Change Theme</button>
            <div style={ThemeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowfunction(n){
    for(let i=0;i<1000000000;i++){}
    return n*2;
}
