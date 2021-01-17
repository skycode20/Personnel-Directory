
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

    // Function to order Personnel by Alphabetical Order
    const handleOrder = heading => {
        if (userState.alphabetical === true) {
            setUserState({
                alphabetical: false
            })
        } else {
            setUserState({
                alphabetical: true
            })
        }

        
        const compareEmployees = (a, b) => {
             
            if (userState.alphabetical === true) {
               
                if (a[heading] === undefined) {
                    return 1;

                } else if (b[heading] === undefined) {
                    return -1;
                
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    
                    return b[heading] - a[heading];
                }
            } else {
                
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                    
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                    
                } else {
                    return a[heading] - b[heading];
                }
            }
        }



        return (
            
        );
    
    }
    
    export default DataArea;