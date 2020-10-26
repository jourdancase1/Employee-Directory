import React, {useState, useEffect } from "react";
import DataTable from "../DataTable";
import DataAreaContext from "../../utils/DataAreaContext"


const DataArea = () => {
    const [dataState, setDataState] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
        heading: [
            {name: "Image", width: "10%", order: "descend"},
            {name: "Name", width: "10%", order: "descend"},
            {name: "Phone", width: "10%", order: "descend"},
            {name: "Email", width: "10%", order: "descend"},
            {name: "DOB", width: "10%", order: "descend"}
        ]
    })
}

export default DataArea;