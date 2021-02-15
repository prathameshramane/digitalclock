import React from "react";
import Button from "react-bootstrap/Button";

import { NavLink } from "react-router-dom";

function ManBtn(props) {
  if (props.status == 0)
    return (
      <div className="text-center">
        <Button variant="success" className="px-4 m-3" onClick={props.start}>
          Start
        </Button>
        <Button variant="danger" className="px-4 m-3" onClick={props.reset}>
          Reset
        </Button>
        <br />
        <NavLink to="/log" className="text-white">
          <Button variant="primary" className="px-4 m-3">
            Logs
          </Button>
        </NavLink>
      </div>
    );
  if (props.status == 1)
    return (
      <div className="text-center">
        <Button variant="warning" className="px-4 m-3" onClick={props.stop}>
          Stop
        </Button>
        <Button variant="danger" className="px-4 m-3" onClick={props.reset}>
          Reset
        </Button>
        <br />
        <NavLink to="/log" className="text-white">
          <Button variant="primary" className="px-4 m-3">
            Logs
          </Button>
        </NavLink>
      </div>
    );
  if (props.status == 2)
    return (
      <div className="text-center">
        <Button variant="success" className="px-4 m-3" onClick={props.start}>
          Start
        </Button>
        <Button variant="danger" className="px-4 m-3" onClick={props.reset}>
          Reset
        </Button>
        <br />
        <NavLink
          to={{ pathname: "/log", manProps: { historyLog: props.historyLog } }}
          className="text-white"
        >
          <Button variant="primary" className="px-4 m-3">
            Logs
          </Button>
        </NavLink>
      </div>
    );
}

export default ManBtn;
