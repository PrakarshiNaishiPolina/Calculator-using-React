import React,{useState} from 'react';

function Calculator(){

    const [input,setInput]=useState('');

    //Handle the input like add the numbers like 2*3.

    //prevInput is just a reference to the current value of input, it will also be ""

    const handleClick=(value)=>{
        setInput((prevInput)=>prevInput+value);

    };




    // Clear the display when "C" is clicked.
    function handleClear(){
        setInput('');

    };

    //Evaluate the input expression when "=" is clicked.

    function handleEvaluate(){
        try{
            setInput(eval(input).toString());  //Evaluate the expression

        }catch(error){
            setInput("Error");
        }

    };



    return(
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                 <button className="button clear" onClick={handleClear}>C</button>
                
              
                
                <button className="button" onClick={()=>handleClick('7')}>7</button>
                <button className="button"onClick={()=>handleClick('8')}>8</button>
                <button className="button" onClick={()=>handleClick('9')}>9</button>
                <button className="button operator" onClick={()=>handleClick('/')}>/</button>


                

                <button className="button" onClick={()=>handleClick('4')}>4</button>
                <button className="button" onClick={()=>handleClick('5')}>5</button>
                <button className="button" onClick={()=>handleClick('6')}>6</button>
                <button className="button operator" onClick={()=>handleClick('*')}>*</button>


                <button className="button" onClick={()=>handleClick('1')}>1</button>
                <button className="button" onClick={()=>handleClick('2')}>2</button>
                <button className="button" onClick={()=>handleClick('3')}>3</button>
                <button className="button operator" onClick={()=>handleClick('-')}>-</button>

                
            
             
                <button className="button zero" onClick={()=>handleClick('0')}>0</button>
                <button className="button" onClick={()=>handleClick('.')}>.</button>
                <button className="button equal" onClick={handleEvaluate}>=</button>
                
                <button className="button operator" onClick={()=>handleClick('+')}>+</button>
                
            </div>
        </div>
    );
}

export default Calculator;