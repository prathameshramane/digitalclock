import React from "react";

function Timer(props) {
  return (
    <div>
      <h1 className="timerFont text-center fontSize60 timerBg">
        {(props.time.h > 0) ? (props.time.h <= 9) ? "0" + props.time.h + " : "  : props.time.h + " : " : ""}
        {props.time.m <= 9 ? "0" + props.time.m : props.time.m} :{" "}
        {props.time.s <= 9 ? "0" + props.time.s : props.time.s} :{" "}
        {props.time.ms <= 9 ? "0" + props.time.ms : props.time.ms}
      </h1>
    </div>
  );
}

export default Timer;
