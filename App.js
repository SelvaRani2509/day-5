import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    if (name && course) {
      setStudents([...students, { name, course }]);
      setName("");
      setCourse("");
    }
  };

  const deleteStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div className="App">
      <h1>Student Directory</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>

      <div>
        {students.map((student, index) => (
          <div key={index} style={{ marginTop: "10px" }}>
            <span>{student.name} - {student.course}</span>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
