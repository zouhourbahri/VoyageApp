import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="bodySpinner">
      <div className="no-freeze-spinner">
        <img src="https://images.pexels.com/photos/606542/pexels-photo-606542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt ="" />
        <div id="no-freeze-spinner">
          <div>
            <i className="material-icons">account_circle</i>
            <i className="material-icons">home</i>
            <i className="material-icons">work</i>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
