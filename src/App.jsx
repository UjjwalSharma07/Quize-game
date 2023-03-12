import { useEffect, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 400" },
    { id: 5, amount: "$ 500" },
    { id: 6, amount: "$ 1000" },
    { id: 7, amount: "$ 2000" },
    { id: 8, amount: "$ 4000" },
    { id: 9, amount: "$ 8000" },
    { id: 10, amount: "$ 16000" },
    { id: 11, amount: "$ 32000" },
    { id: 12, amount: "$ 64000" },
    { id: 13, amount: "$ 125000" },
    { id: 14, amount: "$ 500000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

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
    {
      id: 4,
      question:
        "The tree which sends down roots from its branches to the soil is known as:",
      answers: [
        {
          text: "Oak",
          correct: false,
        },
        {
          text: "Pine",
          correct: false,
        },
        {
          text: "Banyan",
          correct: true,
        },
        {
          text: "Palm",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Electric bulb filament is made of",
      answers: [
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Aluminum",
          correct: false,
        },
        {
          text: "Lead",
          correct: false,
        },
        {
          text: "Tungsten",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        "Brass gets discoloured in air because of the presence of which of the following gases in air?",
      answers: [
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Hydrogen Sulphide",
          correct: true,
        },
        {
          text: "Carbon dioxide",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
      ],
    },
  ];
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop||questionNumber === 7  ? (
              <>
                {questionNumber === 7 ? (
                  <div className="endText">
                    <h1 >You won this game You earned: {earned} </h1>
                    <h2 > Thankyou for playing </h2>
                  </div>
                ) : (
                  <div className="endText">
                    <h1>  You earned: {earned} </h1>
                    <h2 > Good luck for next time. </h2>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
            
                <h2>$ LEADERBOARD PRIZE</h2>
              
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
