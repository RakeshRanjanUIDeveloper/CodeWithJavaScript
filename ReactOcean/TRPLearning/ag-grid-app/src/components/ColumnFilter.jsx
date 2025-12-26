import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { RowGroupingModule } from "ag-grid-enterprise";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import 'ag-grid-enterprise'
ModuleRegistry.registerModules([RowGroupingModule]);


const ColumnFilter = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete", filter:"agTextColumnFilter"},
    { field: "age", filter:"agNumberColumnFilter" },
    { field: "country"},
    { field: "year" },
    { field: "date", filter:"agDateColumnFilter" },
  ]);

  const defaultColDef = useMemo(()=>({
    flex:1,
    filterParams:{
        debounceMs :0, 
        buttons:["apply", "clear", "cancel", "reset"]
    }
  }))
  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((res) => res.json())
      .then((rowData) => setRowData(rowData))
  },[])
  return (
    <div className="ag-theme-alpine" style={{ height: 600}}>
      <AgGridReact ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        animateRows={true}
        defaultColDef={defaultColDef} />
    </div>
  )

};

export default ColumnFilter;
