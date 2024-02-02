import React from "react";
import MUIDataTable from "mui-datatables";
import { Tooltip, IconButton } from "@mui/material";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const Table = ({ data, editData, deleteData }) => {

  const columns = [
    { name: "id", label: "Employee Id", options: { filter: false } },
    { name: "firstName", label: "First Name", options: { filter: false } },
    { name: "lastName", label: "Last Name", options: { filter: false } },
    { name: "gender", label: "Gender", options: { filter: true } },
    { name: "email", label: "Email", options: { filter: false } },
    { name: "salary", label: "Salary", options: { filter: false } },
    { name: "dob", label: "Date of Birth", options: { filter: false } },
    { name: "city", label: "City", options: { filter: true } },
    { name: "address", label: "Address", options: { filter: false } },
    { name: "actions", label: "Actions", options: { filter: false, customBodyRender: (value, tableMeta) => {
     
      const employeeId = tableMeta.rowData[0];
      return (
        <>
       
          <div>
            <IconButton onClick={() => editData(employeeId)} aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteData(employeeId)} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </div>
       
        </>
        );
      },
    },}
  ];


  return (
    <MUIDataTable
      title={"Employee List"}
      data={data}
      columns={columns}
    />
  );
};

export default Table;

