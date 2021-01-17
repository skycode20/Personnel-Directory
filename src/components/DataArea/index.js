
import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import Header from "../Header";
import API from "../../utils/API";
import "../../index.css";
import DataAreaContext from "../../utils/DataAreaContext"
import FormInput from "../FormInput";

//Set states of employees in directory, set state of headings for table columns
function DataArea() {
    const [userState, setUserState] = useState({
        employees: [],
        filteredEmployees: [],
        alphabetical: true,
        headings: [
            { name: "Image" },
            { name: "Name" },
            { name: "Phone" },
            { name: "Email" },
            { name: "DOB" }
        ]
    });

        //retrun dataareacontext.provider with values to pass to the datatable
        return (
            
        )
    
    }
    
    export default DataArea;