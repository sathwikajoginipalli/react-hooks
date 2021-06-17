import {useState,useEffect} from 'react';

function useCount(val,step){
    const [count,setCount] = useState(parseInt(val));

    useEffect(()=>{
        document.title = `${count} times`;
    })

    let key = "count";

    localStorage.setItem(key,count);


    function increment(){
        setCount(count+step);
    }

    function decrement(){
        count>0?setCount(count-step):alert('count cannot become less than 0');
    }
    

    return [count,increment,decrement];
}
export default useCount;
