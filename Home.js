import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function Home() {
  const [employeeList, setEmployeeList] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const [editingEmployee, setEditingEmployee] = useState(null);
  let history = useHistory();

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewAgeChange = (event) => {
    setNewAge(event.target.value);
  };
  const handleNewMobileNumberChange = (event) => {
    setNewMobileNumber(event.target.value);
  };
  const handleNewAddressChange = (event) => {
    setNewAddress(event.target.value);
  };

  const handleAddEmployee = () => {
    // Create a new object with the provided values for Name and Age
    const newEmployee = {
      id: employeeList.length > 0 ? employeeList[employeeList.length - 1].id + 1 : 1,
      Name: newName,
      Age: newAge,
      MobileNumber: newMobileNumber,
      Address: newAddress,
    };
    // Add the new employee to the employeeList array using the setEmployeeList function
    setEmployeeList([...employeeList, newEmployee]);
    alert("Employee added successfully!");
    history.push("/");
  };

  const handleEditEmployee = (employee) => {
    // Set the editingEmployee state to the employee object to be edited
    setEditingEmployee(employee);
    // Populate the input fields with the current employee data
    setNewName(employee.Name);
    setNewAge(employee.Age);
    setNewMobileNumber(employee.MobileNumber);

    setNewAddress(employee.Address);

  };

  const handleUpdateEmployee = () => {
    // Find the index of the employee with the specified ID
    const index = employeeList.findIndex((employee) => employee.id === editingEmployee.id);

    // If the employee was found, update the employee data and clear the editingEmployee state
    if (index !== -1) {
      // Create a new object with the updated employee data
      const updatedEmployee = {
        id: editingEmployee.id,
        Name: newName,
        Age: newAge,
        MobileNumber: newMobileNumber,
        Address: newAddress,


      };
      // Create a copy of the employeeList array
      const updatedEmployeeList = [...employeeList];
      // Replace the old employee data with the updated data
      updatedEmployeeList.splice(index, 1, updatedEmployee);
      // Set the employeeList array to the updated array
      setEmployeeList(updatedEmployeeList);
      // Clear the editingEmployee state and input fields
      setEditingEmployee(null);
      setNewName("");
      setNewAge("");
      setNewMobileNumber("");
      setNewAddress("");
      alert("Employee updated successfully!");
    }
  };

  const handleDeleteEmployee = (id) => {
    // Find the index of the employee with the specified ID
    const index = employeeList.findIndex((employee) => employee.id === id);

    // If the employee was found, show a confirmation dialog and delete it if confirmed
    if (index !== -1) {
      const confirmed = window.confirm("Are you sure you want to delete this employee?");

      if (confirmed) {
        // Remove the employee from the updated array
        const updatedEmployeeList = [...employeeList];
        updatedEmployeeList.splice(index, 1);
        // Set the employeeList
// array to the updated array and clear the editingEmployee state
setEmployeeList(updatedEmployeeList);
setEditingEmployee(null);
alert("Employee deleted successfully!");
}
}
};

return (
<Fragment>
<div className="container my-4">
<h1>Employee List</h1>
<Table striped bordered hover>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>MobileNumber</th>
<th>Address</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{employeeList.map((employee) => (
<tr key={employee.id}>
<td>{employee.id}</td>
<td>{employee.Name}</td>
<td>{employee.Age}</td>
<td>{employee.MobileNumber}</td>
<td>{employee.Address}</td>

<td>
<Button variant="info" onClick={() => handleEditEmployee(employee)}>
Edit
</Button>{" "}
<Button variant="danger" onClick={() => handleDeleteEmployee(employee.id)}>
Delete
</Button>
</td>
</tr>
))}
</tbody>
</Table>
<h2>Add Employee</h2>
<form>
<div className="form-group">
<label htmlFor="nameInput">Name</label>
<input type="text" className="form-control" id="nameInput" value={newName} onChange={handleNewNameChange} />
</div>
<div className="form-group">
<label htmlFor="ageInput">Age</label>
<input type="number" className="form-control" id="ageInput" value={newAge} onChange={handleNewAgeChange} />
</div>
<div className="form-group">
<label htmlFor="mnInput">MobileNumber</label>
<input type="text" className="form-control" id="mnInput" value={newMobileNumber} onChange={handleNewMobileNumberChange} />
</div>
<div className="form-group">
<label htmlFor="addressInput">Address</label>
<input type="text" className="form-control" id="addressInput" value={newAddress} onChange={handleNewAddressChange} />
</div>
{editingEmployee ? (
<Button variant="success" onClick={handleUpdateEmployee}>
Update
</Button>
) : (
<Button variant="primary" onClick={handleAddEmployee}>
Add
</Button>
)}
</form>
</div>
</Fragment>
);
}

export default Home;