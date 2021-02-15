import React, { useState } from "react";

import Timer from "./timer_component";
import ManBtn from "./manual_buttons";

function Home(props) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [historyLog, setHistoryLog] = useState([]);
  // Status = 0 --> Timer is reset
  // Status = 1 --> Timer has started
  // status = 2 --> Timer has stopped

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    updateHistory("Start");
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    updateHistory("Stop");
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    updateHistory("Reset");
  };

  const updateHistory = (btnPressed) => {
    setHistoryLog([
      ...historyLog,
      {
        btnPressed: btnPressed,
        timeMs: time.ms,
        timeS: time.s,
        timeM: time.m,
        timeH: time.h,
      },
    ]);
  };

  return (
    <div className="container mainBody">
      <h1 className="timerFont text-center fontSize80 headingText">
        Stopwatch
      </h1>
      <Timer time={time}></Timer>
      <ManBtn
        start={start}
        stop={stop}
        reset={reset}
        status={status}
        historyLog={historyLog}
      ></ManBtn>
    </div>
  );
}

export default Home;
