import "./DataList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { companyData } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataList() {
  const [data, setData] = useState(companyData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "contactname",
      headerName: "Contact Name",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.contactname}
          </div>
        );
      },
    },
    { field: "name", headerName: "Company Name", width: 200 },
    {field: "revenue", headerName: "Revenue",width:150},
    {field: "location", headerName: "Location",width:200},
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/data/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
