import React from 'react'

function Calculate(a,b,s){
    if(s=='+'){

        return(parseInt(a)+parseInt(b));
    }
    if(s=='-'){

        return(parseInt(a)-parseInt(b));
    }
    if(s=='x'){

        return(parseInt(a)*parseInt(b));
    }
    if (s=='/'){

        return(parseInt(a)/parseInt(b));
    }


}
export default Calculate