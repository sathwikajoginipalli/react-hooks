import React,{useState,useEffect,useRef} from 'react';
import Counter from './components/Counter';
import Memo from './components/Memo';
import Window from './components/Window';



function App(){
    const[name,setName] = useState('');
    const rendercount = useRef(1);
    const prevname = useRef('');

    useEffect(()=>{
        rendercount.current = rendercount.current+1
    },[name])

    useEffect(()=>{
        prevname.current = name;
    },[name])

    
    return(
        <div>
            <Window/>
            <Counter/>
            <Memo/>
            <input value={name} onChange = {(e)=>{setName(e.target.value)}}/>
            My name is {name} and I rendered {rendercount.current} times
            My name is {name} and I used to be {prevname.current}
        
        </div>
    )
}
// import React,{useContext} from 'react';
// const themes = {
//     light: {
//       foreground: "#000000",
//       background: "#eeeeee"
//     },
//     dark: {
//       foreground: "#ffffff",
//       background: "#222222"
//     }
//   };
  
//   const ThemeContext = React.createContext(themes);
  
//   function App() {
//     return (
//       <ThemeContext.Provider value={themes.light}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
  
//   function Toolbar(props) {
//     return (
//       <div>
//         <ThemedButton />
//       </div>
//     );
//   }


  
//   function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//       <button style={{ background: theme.background, color: theme.foreground }}>
//         I am styled by theme context!
//       </button>
//     );
//   }

export default App;

