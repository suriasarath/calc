
import './App.css';
import ButtonFrame from "./Components/ButtonFrame";
import Display from "./Components/Display"
import {useState} from 'react'
import Calculate from './Logic/Calculate'
let calc_object = {
  first:null,
  second:null,
  operation:null,
 };
var dis = ""
function App() {

    

   // const symbols = ['+','-','/','*','%']
   
    let [state,setState] = useState('');
  
    const handleClick=buttonName=>{
        
        //console.log(Calculate('6','7','+'));
        if(buttonName==='AC') {
            dis = '';
            buttonName = '';
            calc_object = {
              first:"",
              second:"",
              operation:"" };
        }
        dis += buttonName.toString();
        state = dis
        setState(dis);
        state = Calculate(calc_object,buttonName);
        
            setState([state.first,state.operation,state.second].join(''));
       /* if (buttonName in symbols){

            if(a==''){
                a = dis;
                action = true;
                symbol=buttonName
            }
            if(action & b==''){
                b = dis

                Calculate(a,b,)

            }

        }*/


    };
  return (
    <div className="component-app" >
      <Display value = {state} />
      <ButtonFrame clickHandler={handleClick} />

    </div>
  );
}

export default App;
