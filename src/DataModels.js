import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DataModels() {
    const [excelClicked, setExcelClicked] = useState(true)
    const [oranClicked, setOranClicked] = useState(false)

  const navigate = useNavigate();
  function handleOverviewClick() {
    navigate("/");
  }


  function handleMessageClicked(whatWasClicked) {
    if(whatWasClicked === 'excel') {
        setExcelClicked(true)
        setOranClicked(false)
    } else {
        setExcelClicked(false)
        setOranClicked(true)
    }
}

  return (
      <div>

    <div className="data-div">
      <h1>Choose Data Models</h1>
      <p>
        Import your Excel data and O-RAN Yang models to create messages. You may
        import multiple Excel data and O-RAN Yang models but only one of each
        will be activated at a time. Once they are imported, the Excel and Yang
        statuses will turn green.
      </p>
      <button onClick={handleOverviewClick}>Back to Overview</button>
    </div>
      <div className='messages-div'>
        <button onClick={() => handleMessageClicked('excel')}>Excel</button>
        <button onClick={() => handleMessageClicked('oran')}>O-RAN YANG</button>

    </div>
    <div className="test-div">
        <p>TEST-DATA-MODEL</p>
        <div>
            <button>Activate</button>
            <button>Rename</button>
            <button>Delete</button>
        </div>
    </div>
    {excelClicked && <div>
        <h1>excel</h1>
        <h1>excel</h1>
        <h1>excel</h1>
    </div>}
    {oranClicked && <div>
        <h1>Oran</h1>
        <h1>Oran</h1>
        <h1>Oran</h1>
    </div>}
      </div>
  );
}

export default DataModels;
