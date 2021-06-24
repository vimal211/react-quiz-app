import  './App.css';
import {useState} from 'react';
import Quiz from './Component/quiz';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);

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

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz/>
        </div>
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
