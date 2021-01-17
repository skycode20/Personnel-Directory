
import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
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


        const sortedEmployees = userState.filteredEmployees.sort(compareEmployees);

        setUserState({
            ...userState,
            filteredEmployees: sortedEmployees
        })
    };



    // Function to set the userState
    const handleInputChange = event => {
        const searchTerm = event.target.value;
        const searchedEmployees = userState.employees.filter(employee => {
            let item = employee.name.first + employee.name.last + employee.email + employee.cell + employee.dob.age;
            return item.indexOf(searchTerm) !== -1;
        })

        setUserState({
            ...userState,
            filteredEmployees: searchedEmployees
        });
    }

    useEffect(() => {
        API.getUsers().then(results => {
            setUserState({
                employees: results.data.results,
                filteredEmployees: results.data.results,
                headings: [
                    { name: "Image" },
                    { name: "Name" },
                    { name: "Phone" },
                    { name: "Email" },
                    { name: "DOB" }
                ]
            });
        });
    }, []);

    return (
        <DataAreaContext.Provider value={{ userState, handleInputChange, handleOrder }}>
            <FormInput />
            <div className="data-area mx-auto">
                {userState.filteredEmployees.length > 0 ? <DataTable /> : <div className="null-results">No Employees</div>}
            </div>
        </DataAreaContext.Provider>
    );

}

export default DataArea;