
import './App.css';
import ButtonFrame from "./Components/ButtonFrame";
import Display from "./Components/Display"
import {useState} from 'react'
import Calculate from './Logic/Calculate'

var dis = ""
function App() {

    let calc_object = {
      first:null,
      second:null,
      operation:null };

   // const symbols = ['+','-','/','*','%']
   calc_object.first = '0'
    let [state,setState] = useState('');
  
    const handleClick=buttonName=>{
        console.log(buttonName);
        console.log(Calculate('6','7','+'));
        if(buttonName==='AC') {
            dis = '';
            buttonName = '';
        }
        dis += buttonName.toString();
        state = dis
        setState(dis);
        console.log(dis)
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
