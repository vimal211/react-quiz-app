import React ,{useState,useEffect}from 'react';
import './quiz.css'
import useSound from 'use-sound';
import play from '../assets/play.mp3';
import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';

function Quiz({setStop,setQuestionNumber,questionNumber,data}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer,setSelectedAnswer] =  useState(null);
    const [className,setClassName] =  useState("answer");
    const [letsPlay] =  useSound(play);
    const [correctAnswer] =  useSound(correct);
    const [wrongAnswer] =  useSound(wrong);

    useEffect(() => {
        letsPlay();
      }, [letsPlay]);
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);

    const delay =(duration,callback)=>{
        setTimeout(() => {
            callback();
          }, duration);
    }

    useEffect(()=>{
        // eslint-disable-next-line no-lone-blocks
        {questionNumber>15 ? setStop(true) : setStop(false)};
    },[questionNumber,setStop])

    const handleClick=(a)=>{
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(1500,()=>setClassName(a.correct ? "answer correct" :"answer wrong"))
        delay(5000,()=>{
            if(a.correct){
                correctAnswer();
                delay(2000,()=>{
                    setQuestionNumber((prev)=>prev+1);
                    setSelectedAnswer(null);
                })
                
            }
            else{
                wrongAnswer();
                delay(2000,()=>{
                    setStop(true);
                })
                
            }
        })
    };

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a)=>(
                   <div className={selectedAnswer === a ? className : "answer"} onClick={() =>  handleClick(a)}>{a.text}</div>
                ))}        
            </div>
        </div>
    )
}

export default Quiz;
