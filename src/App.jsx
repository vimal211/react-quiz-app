import  './App.css';
import {useState,useEffect} from 'react';
import Quiz from './Component/quiz';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned,setEarned] = useState("₹0")

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

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
            <div className="timer">30</div>
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
