import "./MessageList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useEffect} from 'react'
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';


export default function MessageList() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    axios.get('http://localhost:8080/admin/getChats')
    .then(res=>{
      console.log(res)
      if(res.data.chats)
      { 
        setData(res.data.chats)
      }
      setLoading(false)
      
    })
  })


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "message",
      headerName: "Message",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.message}
          </div>
        );
      },
    },
    
    // {field: "credits", headerName: "Credits",width:50},
    // {
    //   field: "package",
    //   headerName: "Package",
    //   width: 180,
    // },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    // {
    //   field: "credits",
    //   headerName: "Credits",
    //   width: 130,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/user/" + params.row.id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        loading={loading}
        checkboxSelection
      />
    </div>
  );
}
