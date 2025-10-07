import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);
const DataGrid = () => {
const [rowData, setRowData] = useState([
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  { make: "Chevrolet", model: "Bolt", price: 31200, electric: true },
  { make: "Honda", model: "Civic", price: 21500, electric: false },
  { make: "Nissan", model: "Leaf", price: 29900, electric: true },
  { make: "BMW", model: "i3", price: 44450, electric: true },
  { make: "Audi", model: "e-tron", price: 65900, electric: true },
  { make: "Hyundai", model: "Kona", price: 34500, electric: true },
  { make: "Kia", model: "Niro", price: 33000, electric: true },
  { make: "Volkswagen", model: "ID.4", price: 37995, electric: true },
  { make: "Mercedes", model: "EQC", price: 67800, electric: true },
  { make: "Mazda", model: "MX-30", price: 33600, electric: true },
  { make: "Subaru", model: "Solterra", price: 44995, electric: true },
  { make: "Lucid", model: "Air", price: 77400, electric: true },
  { make: "Rivian", model: "R1T", price: 67500, electric: true },
  { make: "Jeep", model: "Wrangler 4xe", price: 49800, electric: true },
  { make: "Porsche", model: "Taycan", price: 90100, electric: true },
  { make: "Chevrolet", model: "Silverado", price: 42200, electric: false },
  { make: "Ram", model: "1500", price: 38900, electric: false },
  { make: "Ford", model: "Mustang Mach-E", price: 42895, electric: true },
  { make: "GMC", model: "Hummer EV", price: 79995, electric: true },
  { make: "Tesla", model: "Model 3", price: 42990, electric: true },
  { make: "Tesla", model: "Model S", price: 88990, electric: true },
  { make: "Tesla", model: "Model X", price: 97990, electric: true },
  { make: "Honda", model: "Accord", price: 27620, electric: false },
  { make: "Hyundai", model: "Ioniq 5", price: 41950, electric: true },
  { make: "Kia", model: "EV6", price: 42900, electric: true },
  { make: "Nissan", model: "Ariya", price: 43900, electric: true },
  { make: "BMW", model: "i4", price: 55900, electric: true },
  { make: "Audi", model: "Q4 e-tron", price: 49900, electric: true },
  { make: "Chevrolet", model: "Camaro", price: 25900, electric: false },
  { make: "Dodge", model: "Charger", price: 29995, electric: false }
]);


  const defaultColDef = useMemo(()=>{
    return{
      flex:1,
      filter:true,
      floatingFilter:true,
      editable:true
    }
  })

  const [colDefs, serColDefs] = useState([
    { field: "make",
      checkboxSelection:true,
      cellEditor:"agSelectCellEditor",
      cellEditorParams: {values: ["Tesla", "Ford", "Toyota"]}
     },
    { field: "model" },
    { field: "price",
      valueFormatter: (p) => "$" + p.value.toLocaleString(),
      cellClassRules:{
        'green-cell': (p) => p.value > 30000
      }
     },
    { field: "electric" },
  ]);
    const rowClassRules = useMemo(()=>({
    'red-row':(p) => p.data.make === 'Toyota'
  }))
  return (
    <div className="ag-theme-quartz" style={{ height: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} 
          defaultColDef={defaultColDef} 
          rowSelection={"multiple"}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10,20]}
          rowClassRules={rowClassRules} />
    </div>
  );
}

export default DataGrid