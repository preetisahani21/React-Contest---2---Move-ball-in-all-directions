import React, { Component, useState, useEffect, useCallback } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
    position: "absolute"
  });
  //const [style, setStyle] = useState(ballPosition);
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px",
      position: "absolute"
    });
  };
  const start = () => {
    setRenderBall(true);
    //document.addEventListener("keydown", handlekey);
  };
  /*useEffect(() => {
    //document.addEventListener("keydown", handlekey);
  });
  const handlekey = (event) => {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      let k = x + 5;
      setX(k);
      setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
      console.log(x);
    } else if (event.key === "ArrowLeft") {
      const k = x - 5;
      setX(k);
      setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
    } else if (event.key === "ArrowUp") {
      const k = y - 5;
      setY(k);
      setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
    } else if (event.key === "ArrowDown") {
      const k = y + 5;
      setY(k);
      setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
    }
    console.log(x + " " + y);
    //setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
    setStyle(ballPosition);
  };*/
  const handleUserKeyPress = useCallback(
    (event) => {
      console.log(event.key);
      if (event.key === "ArrowRight") {
        let k = x + 5;
        setX(k);
        console.log(x);
      } else if (event.key === "ArrowLeft") {
        const k = x - 5;
        setX(k);
      } else if (event.key === "ArrowUp") {
        const k = y - 5;
        setY(k);
      } else if (event.key === "ArrowDown") {
        const k = y + 5;
        setY(k);
      }
      console.log(x + " " + y);
      setBallPosition({ left: `${x}px`, top: `${y}px`, position: `absolute` });
      //setStyle(ballPosition);
    },
    [x, y]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress, x, y]);

  const renderChoice = () => {
    if (!renderBall) {
      return (
        <button onClick={start} className="start">
          Start
        </button>
      );
    } else return <div style={ballPosition} className="ball"></div>;
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
