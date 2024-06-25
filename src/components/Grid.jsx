import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import axios from "axios";

const Grid = () => {
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
      filter: true,
      floatingFilter: true,
    };
  }, []);

  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([
    { field: "id", checkboxSelection: true },
    { field: "title" },
    {
      field: "price",
      valueFormatter: (params) => `$${params.value.toLocaleString()}`,
    },
    {
      field: "description",
      flex: 2, // Give more space to description
    },
  ]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const products = response.data.products;
        console.log(products);
        const filteredProducts = products.map(
          ({ id, title, price, description }) => ({
            id,
            title,
            price,
            description,
          })
        );
        setRowData(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ag-theme-material-dark" style={{ height: 500 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection={"multiple"}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20]}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Grid;
