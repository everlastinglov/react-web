import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      id: 2,
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      id: 3,
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      id: 4,
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      id: 6,
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      id: 7,
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-800 min-h-screen">
      <Header />
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>Harj bolohgui</p>
      )}
    </div>
  );
}

export default App;
