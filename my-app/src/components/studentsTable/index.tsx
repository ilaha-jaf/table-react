// import AddStudents from '../addStudents/index';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


{/* <AddStudents/> */}
interface User {
  id: number;
  name: string;
  email: string;
  gpa: number;
}
interface TableProps {
  students: User[];
  setStudents: React.Dispatch<React.SetStateAction<User[]>>;
}
function Table({ students, setStudents }:TableProps) {
  const [search, setSearch] = useState('');
  

const handleDelete = (id: number) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
};

const filteredStudents = students.filter(student =>
  student.name.toLowerCase().includes(search.toLowerCase())
  
);

  return (
    <div>
        <div>
        <input type="text" id="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search' required/>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gpa}</td>
              <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
