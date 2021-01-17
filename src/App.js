import logo from './logo.svg';
import './App.css';
import ButtonFrame from "./Components/ButtonFrame";
import Button from "./Components/Button";
import Display from "./Components/Display"
import react, {useState} from 'react'
import Calculate from './Logic/Calculate'
var dis = ""
function App() {

    const symbols = ['+','-','/','*','%']
    let [state,setState] = useState('')
    let a = '';
    let b = '';
    let action = false;
    let symbol = '';
    const handleClick=buttonName=>{
        console.log(buttonName);
        console.log(Calculate('6','7','+'));
        if(buttonName=='AC') {
            dis = '';
            buttonName = '';
        }
        dis += buttonName.toString();
        state = dis
        setState(state);
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
