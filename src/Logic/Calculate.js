
function isNumber(value){
    return /[0-9]+/.test(value);

}
function operate(calc_object){
    let a = calc_object.first;
    let b = calc_object.second;
    let s = calc_object.operation;

    if(s==='+'){

        return(parseInt(a)+parseInt(b));
    }
    else if(s==='-'){

        return(parseInt(a)-parseInt(b));
    }
    else if(s==='x'){

        return(parseInt(a)*parseInt(b));
    }
    else if(s==='%'){

        return(parseInt(a)%parseInt(b));
    }
    else if (s==='/'){

        return(parseInt(a)/parseInt(b));
    }
    else
    {
        return 0;
    }
    
}

function Calculate(calc_object,buttonName){
    

    if(buttonName==='AC'){

        return{
            first:'',
            second:'',
            operation:''
        };
        
    }
    console.log(isNumber(buttonName));
    if(isNumber(buttonName)){
        if(calc_object.operation){
            if(calc_object.second){
            calc_object.second +=buttonName;
            }
            else{
                calc_object.second =buttonName;
            }
            return calc_object;
        }
        else{

            if(calc_object.first){
                calc_object.first +=buttonName; 
            }
            else{
                calc_object.first =buttonName; 
            }
            return calc_object;
        }
    }
    else{
        if(calc_object.operation){
            if(buttonName ==='='){
            calc_object.first = operate(calc_object);
            calc_object.operation='';
            calc_object.second='';
            return calc_object;
            }
            else{
                return calc_object;
            }
        }
        else{
            
            calc_object.operation=buttonName;
            return calc_object;

        }

    }


}
export default Calculate

