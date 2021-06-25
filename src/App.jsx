import  './App.css';
import {useState,useEffect} from 'react';
import Quiz from './Component/quiz';
import Timer from './Component/Timer';
import data  from './Data';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned,setEarned] = useState("₹0")
   
  

  const moneyPyramid = [
    {id:1,amount:'₹1000'},
    {id:2,amount:'₹3000'},
    {id:3,amount:'₹5000'},
    {id:4,amount:'₹10,000'},
    {id:5,amount:'₹20,000'},
    {id:6,amount:'₹40,000'},
    {id:7,amount:'₹80,000'},
    {id:8,amount:'₹1,60,000'},
    {id:9,amount:'₹3,20,000'},
    {id:10,amount:'₹6,40,000'},
    {id:11,amount:'₹12,80,000'},
    {id:12,amount:'₹25,60,000'},
    {id:13,amount:'₹50,00,000'},
    {id:14,amount:'₹1,00,00,000'},
    {id:15,amount:'₹2,00,00,000'},
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endtext">Winning price : {earned}</h1> : (
          <>
            <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
          </div>
          <div className="bottom">
            <Quiz data={data} questionNumber={questionNumber} setQuestionNumber = {setQuestionNumber} setStop={setStop}/>
          </div></>
        )}
      
      </div>
      <div className="money">
        <ul className ="moneyList">
          {moneyPyramid.map((m)=>(
            <li className={m.id === questionNumber ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}        
        </ul>
      </div>
    </div>
  );
}

export default App;
