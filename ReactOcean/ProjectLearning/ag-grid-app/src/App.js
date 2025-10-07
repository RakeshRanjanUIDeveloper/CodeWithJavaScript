import React from "react";
import "./App.css";
import AGGridEnterPrise from "./components/AGGridEnterPrise";
import DataGrid from "./components/DataGrid";
import ColumnFilter from "./components/ColumnFilter";

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
// import 'ag-grid-community/styles/ag-theme-material.css';

const App = () => {
  return (
    <React.Fragment>
         {/*  <DataGrid /> 
        <AGGridEnterPrise />*/}
        <ColumnFilter />
    </React.Fragment>

  )
};

export default App;
