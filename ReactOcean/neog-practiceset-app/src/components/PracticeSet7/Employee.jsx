import React, { useEffect, useState } from 'react'
import { fakeEmployeeFetch } from './api/fakeEmployeeFetch'

const Employee = () => {
    const [allEmployees, setAllEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    useEffect(()=>{
        fakeEmployeeFetch('https://example.com/api/users')
        .then((res) =>{
            setAllEmployees(res.data)
            setFilteredEmployees(res.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    const handleCompanyChange = (e) =>{
        const selectedCompany = e.target.value;
        console.log(selectedCompany)
        if(selectedCompany === 'All Companies'){
            setFilteredEmployees(allEmployees)
        }else{
            const filteredData = allEmployees.filter((e) => e.company === selectedCompany);
            setFilteredEmployees(filteredData)
        }
    }
    const uniqueCompanies = [...new Set(allEmployees.map((e) => e.company))];
    console.log(uniqueCompanies)
  return (
    <React.Fragment>
        <h2>Employee</h2>
        <label>Filter By Company : </label>
        <select onChange={handleCompanyChange}>
            <option value='All Companies'>All Companies</option>
            {
                uniqueCompanies.map((c) =>(
                    <option value={c}>{c}</option>
                ))
            }
        </select>
        <div className='employees-details' style={{'display':'flex', 'gap':'10px'}}>
            {
                filteredEmployees.map((e) =>(
                    <div className='employees' style={{'border':'1px solid green', 'textAlign':'center'}}>
                        <h4>{e.name}  {e.email}</h4>
                        <h4>{e.website} - {e.company}</h4>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Employee