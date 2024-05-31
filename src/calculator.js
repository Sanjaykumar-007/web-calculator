import React,{Component} from "react";
import "./calculator.css"

class Calculator extends React.Component{

  constructor(props){
      super(props);
      this.state={
        displayValue:"" //initialize the display
      }
  }

//handlingButton
handleButton=(value)=>{
  if(value==="="){
     this.calculateResult();
}
 else if(value==="c"){
   this.clearDisplay();
 }

 else{
    this.setState((prevState)=>({
   displayValue:prevState.displayValue+ value,
  }))
 }
}

//calculate result
 calculateResult = () => {
    try{
      //eslint-disable-next-line no-eval
      const result= eval(this.state.displayValue);
      this.setState({displayValue: result });
    } catch(error){
      this.setState({displayValue: "Error"});
    }
 };

 //clearButton
 clearDisplay =() =>{
   this.setState({displayValue:"",});
 };

    render(){
        
        return <>

        <h1>Calculator</h1>
 
        <div className="calculator">
         
          <div className="displayValue">{this.state.displayValue} </div>

          <div className="buttons">
            <button onClick={()=> this.handleButton("7")}>7</button>
            <button onClick={()=> this.handleButton("8")}>8</button>
            <button onClick={()=> this.handleButton("9")}>9</button>
            <button onClick={()=> this.handleButton("/")}  className="symbol">/</button>
            
            <button onClick={()=> this.handleButton("4")}>4</button>
            <button onClick={()=> this.handleButton("5")}>5</button>
            <button onClick={()=> this.handleButton("6")}>6</button>
            <button  onClick={()=> this.handleButton("*")}className="symbol">*</button>

            <button onClick={()=> this.handleButton("1")}>1</button>
            <button onClick={()=> this.handleButton("2")}>2</button>
            <button onClick={()=> this.handleButton("3")}>3</button>
            <button onClick={()=> this.handleButton("-")} className="symbol">-</button>

            <button onClick={()=> this.handleButton("0")}>0</button>
            <button onClick={()=> this.handleButton(".")}>.</button>
            <button onClick={()=> this.handleButton("c")} className="clearButton">c</button>
            <button onClick={()=> this.handleButton("+")} className="symbol">+</button>

            <button onClick={()=> this.handleButton("=")}className="equals">=</button>

          </div>
          
          

        </div>

         </>


    }
}

export default Calculator;