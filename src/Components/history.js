import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

function HistoryLog(props) {
  var count = 0;
  if (props.location.manProps) {
    var history = props.location.manProps.historyLog.map((log) => {
      return (
        <tr>
          <td>{log.btnPressed}</td>
          <td>{log.timeH}</td>
          <td>{log.timeM}</td>
          <td>{log.timeS}</td>
          <td>{log.timeMs}</td>
        </tr>
      );
    });
  } else {
      var history = "No Data"
  }
  return (
    <div className="container my-5">
      <h1 className="text-center text-white">History Log</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Action</th>
            <th>Hours</th>
            <th>Minutes</th>
            <th>Seconds</th>
            <th>Mili Seconds</th>
          </tr>
        </thead>
        <tbody>{history}</tbody>
      </Table>
      <NavLink to="/home">
        <Button variant="primary" className="px-4 m-3">
          Back
        </Button>
      </NavLink>
    </div>
  );
}

export default HistoryLog;
