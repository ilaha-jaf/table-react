import AddStudents from '../addStudents/index';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


<AddStudents/>
interface User {
    id: number;
    name: string;
    email: string;
    gpa:number;
  }
  
function Table() {
  const [students, setstudents] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gpa, setGpa] = useState<number | ''>('');
  const [search, setSearch] = useState('');

  const addUser = () => {
    if (name==''||email=="" || gpa=="") {
        alert('You must add all data')
        return;
    }
    const newUser: User = {
      id: students.length + 1,
      name: name,
      email: email,
      gpa: Number(gpa)
    };
    
    setstudents([...students, newUser]);
    setName('')
    setEmail('')
    setGpa('')
    setSearch('')
  };
const handleSubmit =(event:any)=>{
    event.preventDefault()

}
const handleDelete = (id: number) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setstudents(updatedStudents);
};
const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <form className='students' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="email">GPA:</label>
        <input type="number" id="number" value={gpa} onChange={e=>setGpa(Number(e.target.value))} required/>
      </div>
      <button onClick={addUser}>Add Students</button>
     
    </form>
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
