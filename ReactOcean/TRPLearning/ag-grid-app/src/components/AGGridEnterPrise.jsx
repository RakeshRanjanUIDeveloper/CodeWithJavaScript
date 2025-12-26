import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { RowGroupingModule } from "ag-grid-enterprise";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import 'ag-grid-enterprise'
ModuleRegistry.registerModules([RowGroupingModule]);


const AGGridEnterPrise = () => {

  const MyComp = (params) =>{
    const imgurl = 'https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?semt=ais_hybrid&w=740&q=80';
    const imgStyle = {width:40, top:0, left:0, position:'absolute'};
    const style ={marginLeft:20};
    return (
      <span style={style}>
          <img src={imgurl} style={imgStyle} />
          {params.value}
      </span>
    )
  }
  const SimpleComp =(p)=>{
    const onDollar = useCallback(() => window.alert('Dollar ' + p.value));
    const onAt = useCallback(()=> window.alert('At ' + p.value))
    return (
      <>
        <button onClick={onDollar}>+</button>
        <button onClick={onAt}>+</button>
      </>
    )
  }
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "athlete", rowGroup: true,cellRenderer : SimpleComp},
    { field: "age" , rowGroup: true, cellRenderer:MyComp},
    { field: "country", rowGroup: true},
    { field: "year" , rowGroup: true},
    { field: "date" , rowGroup: true},
    { field: "sport", rowGroup: true },
    { field: "gold" , rowGroup: true},
    { field: "silver", rowGroup: true },
    { field: "bronze", rowGroup: true },
    { field: "total" , rowGroup: true}
  ]);

  const defaultColDef = useMemo(()=>({
    sortable:true,
    filter:true,
    enableRowGroup:true
  }))
  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((res) => res.json())
      .then((rowData) => setRowData(rowData))
  },[])
  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      <AgGridReact ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        groupDisplayType="multipleColumns"
        rowGroupPanelShow="always" />
    </div>
  )

};

export default AGGridEnterPrise;
