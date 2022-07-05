class Calculator extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <div className="calculator-container">
          <div className="screen"><span className="result">0</span></div>
          <div className="buttons">
            <button className="normal">AC</button>
            <button className="normal">+/-</button>
            <button className="normal">%</button>
            <button className="normal active"><span>&#247;</span></button>
            <button className="normal">7</button>
            <button className="normal">8</button>
            <button className="normal">9</button>
            <button className="normal active">x</button>
            <button className="normal">4</button>
            <button className="normal">5</button>
            <button className="normal">6</button>
            <button className="normal active">-</button>
            <button className="normal">1</button>
            <button className="normal">2</button>
            <button className="normal">3</button>
            <button className="normal active">+</button>
            <button className="zero">0</button>
            <button className="normal">.</button>
            <button className="normal active">=</button>
          </div>
        </div>
      </>
        );
  }
	
}

export default Calculator;