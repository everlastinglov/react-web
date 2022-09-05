import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
    {
      name: "Bilguun",
      role: "CEO",
      img: "https://images.pexels.com/photos/9989392/pexels-photo-9989392.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>Harj bolohgui</p>
      )}
    </div>
  );
}

export default App;
